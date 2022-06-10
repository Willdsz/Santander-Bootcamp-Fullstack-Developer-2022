const form = document.getElementById('list');
const taskList = document.getElementById('tasks');

/* Envia o conteúdo no campo de input para tarefas e reseta o formulário*/
form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

/* Adiciona Task na lista */
function addTask(description) {
	const taskContainer = document.createElement('div'); /* Cria uma div container para cada tarefa*/
	const newTask = document.createElement('input'); /* Cria uma caixa de seleção de item na lista de tasks*/
	const taskLabel = document.createElement('label'); /* Cria um elemento html para armazenar uma task da lista */
	const taskDescriptionNode = document.createTextNode(description); /* Cria um nó de texto para um elemento... veja mais aqui no link no final do documento ¹*/

	newTask.setAttribute('type', 'checkbox'); /* Altera atributo do elemento*/
	newTask.setAttribute('name', description); /* Altera atributo do elemento*/
	newTask.setAttribute('id', description); /* Altera atributo do elemento*/

	taskLabel.setAttribute('for', description); /* Altera atributo do elemento*/
	taskLabel.appendChild(taskDescriptionNode); /* Anexa nó de texto a lable (etiqueta/folha)*/

	taskContainer.classList.add('task-item'); /* Adiciona classe no elemento*/
	taskContainer.appendChild(newTask); /* Inclui um elemento no outro */
	taskContainer.appendChild(taskLabel); /* Inclui um elemento no outro */

	taskList.appendChild(taskContainer); /* Inclui um elemento no outro */
}

// * ¹ http://devfuria.com.br/javascript/dom-create-text-node/#:~:text=A%20fun%C3%A7%C3%A3o%20createTextNode%20cria%20um,var%20elemento_pai%20%3D%20document. *//