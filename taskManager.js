// Load the needed tools
const fs = require('fs');  // To read and write files
const readline = require('readline');  // To get input from user

const FILE = 'tasks.txt';  // File name where tasks will be saved

// Read tasks from file (or start with empty list if file not there)
function readTasks() {
  if (fs.existsSync(FILE)) {
    const data = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(data);
  } else {
    return [];
  }
}

// Save tasks to file
function saveTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks));
}

// Add a task
function addTask(task) {
  const tasks = readTasks();
  tasks.push({ task: task, done: false });
  saveTasks(tasks);
  console.log('Task added!');
}

// Show all tasks
function showTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    tasks.forEach((t, i) => {
      let status = t.done ? '[x]' : '[ ]';
      console.log(`${i + 1}. ${status} ${t.task}`);
    });
  }
}

// Mark a task complete
function markComplete(num) {
  const tasks = readTasks();
  if (num < 1 || num > tasks.length) {
    console.log('Wrong task number!');
  } else {
    tasks[num - 1].done = true;
    saveTasks(tasks);
    console.log('Task marked complete!');
  }
}

// Remove a task
function removeTask(num) {
  const tasks = readTasks();
  if (num < 1 || num > tasks.length) {
    console.log('Wrong task number!');
  } else {
    tasks.splice(num - 1, 1);
    saveTasks(tasks);
    console.log('Task removed!');
  }
}

// Setup to get input from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Show menu and ask for choice
function menu() {
  console.log('\nMenu:');
  console.log('1. Add task');
  console.log('2. Show tasks');
  console.log('3. Mark task complete');
  console.log('4. Remove task');
  console.log('5. Exit');

  rl.question('Choose number: ', (answer) => {
    if (answer === '1') {
      rl.question('Write your task: ', (task) => {
        addTask(task);
        menu();
      });
    } else if (answer === '2') {
      showTasks();
      menu();
    } else if (answer === '3') {
      rl.question('Number of task to complete: ', (num) => {
        markComplete(Number(num));
        menu();
      });
    } else if (answer === '4') {
      rl.question('Number of task to remove: ', (num) => {
        removeTask(Number(num));
        menu();
      });
    } else if (answer === '5') {
      console.log('Bye!');
      rl.close();
    } else {
      console.log('Try again!');
      menu();
    }
  });
}

menu();
