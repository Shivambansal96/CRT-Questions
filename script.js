let questions = [];
let currentQuestionIndex = 0;
let completedQuestions = JSON.parse(localStorage.getItem('completedQuestions') || '[]');

async function loadQuestions() {
  const res = await fetch('questions.json');
  const data = await res.json();
  questions = data.problems;
  renderQuestion(currentQuestionIndex);
  renderQuestionList();
}

function renderQuestion(index) {
  const q = questions[index];
  if (!q) return;
  document.getElementById('question-number').textContent = `Question ${q.id}`;
  document.getElementById('question-title').textContent = q.title;
  document.getElementById('question-description').textContent = q.description;
  document.getElementById('question-input-format').innerHTML = `<span class='input-label'>Input:</span> <span>${q.input_format || ''}</span>`;
  document.getElementById('question-output-format').innerHTML = `<span class='output-label'>Output:</span> <span>${q.output_format || ''}</span>`;
  let example = '';
  if (q.example) {
    example = `<b>Example:</b> <pre>${JSON.stringify(q.example, null, 2)}</pre>`;
  } else if (q.examples) {
    example = `<b>Examples:</b> <pre>${JSON.stringify(q.examples, null, 2)}</pre>`;
  }
  document.getElementById('question-example').innerHTML = example;
  document.getElementById('done-message').style.display = completedQuestions.includes(q.id) ? 'block' : 'none';
  document.getElementById('done-btn').style.display = completedQuestions.includes(q.id) ? 'none' : 'inline-block';
  // Update nav button states
  document.getElementById('prev-btn').disabled = (index === 0);
  document.getElementById('next-btn').disabled = (index === questions.length - 1);
  // Scroll question area to top
  const qa = document.getElementById('question-area');
  if (qa) qa.scrollTo({ top: 0, behavior: 'smooth' });
  // Also scroll window to top for mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestionList() {
  const listDiv = document.getElementById('question-list');
  let html = '<ul>';
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const completed = completedQuestions.includes(q.id) ? 'completed' : '';
    html += `<li class="${completed}" data-index="${i}">Q${q.id}</li>`;
  }
  html += '</ul>';
  listDiv.innerHTML = html;
  // Add click listeners
  listDiv.querySelectorAll('li').forEach(li => {
    li.onclick = function() {
      currentQuestionIndex = parseInt(this.getAttribute('data-index'));
      renderQuestion(currentQuestionIndex);
      hideSidebar();
    };
  });
}

function showSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const panel = document.getElementById('sidebar-panel');
  sidebar.classList.add('open');
  overlay.classList.remove('hidden');
  panel.classList.remove('hidden');
}
function hideSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const panel = document.getElementById('sidebar-panel');
  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
  panel.classList.add('hidden');
}

document.getElementById('sidebar-toggle').onclick = function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const panel = document.getElementById('sidebar-panel');
  if (!sidebar.classList.contains('open')) {
    sidebar.classList.add('open');
    overlay.classList.remove('hidden');
    panel.classList.remove('hidden');
  } else {
    sidebar.classList.remove('open');
    overlay.classList.add('hidden');
    panel.classList.add('hidden');
  }
};

document.getElementById('sidebar-overlay').onclick = function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const panel = document.getElementById('sidebar-panel');
  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
  panel.classList.add('hidden');
};

document.getElementById('done-btn').onclick = function() {
  const q = questions[currentQuestionIndex];
  if (!completedQuestions.includes(q.id)) {
    completedQuestions.push(q.id);
    localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
    renderQuestion(currentQuestionIndex);
    renderQuestionList();
  }
};

document.getElementById('prev-btn').onclick = function() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
};
document.getElementById('next-btn').onclick = function() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  }
};

window.onload = loadQuestions; 