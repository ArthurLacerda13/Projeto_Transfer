let totalAdditional = 0;

function addService(serviceId, serviceName, servicePrice, inputId) {
    const selectedServices = document.getElementById('selected-services');
    const totalAdditionalElement = document.getElementById('total-additional');
    const inputElement = document.getElementById(inputId);
    const numberOfPeople = parseInt(inputElement.value);

    if (numberOfPeople < 1) {
        alert("A quantidade de pessoas deve ser pelo menos 1.");
        return;
    }

    const serviceItem = document.getElementById(serviceId);
    serviceItem.remove();

    const newService = document.createElement('li');
    newService.className = 'flex justify-between items-center p-3 border rounded-lg combo-card-dark';
    newService.innerHTML = `
        <span>${serviceName} (${numberOfPeople} pessoa${numberOfPeople > 1 ? 's' : ''})</span>
        <span class="text-green-600">+ R$ ${(servicePrice * numberOfPeople).toFixed(2)}</span>
        <button onclick="removeService('${serviceId}', '${serviceName}', ${servicePrice}, ${numberOfPeople})" class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">Remover</button>
    `;
    selectedServices.appendChild(newService);

    totalAdditional += servicePrice * numberOfPeople;
    totalAdditionalElement.textContent = `R$ ${totalAdditional.toFixed(2)}`;
}

function removeService(serviceId, serviceName, servicePrice, numberOfPeople) {
    const selectedServices = document.getElementById('selected-services');
    const availableServices = document.getElementById('available-services');
    const totalAdditionalElement = document.getElementById('total-additional');

    const serviceItem = document.querySelector(`#selected-services li button[onclick*="${serviceId}"]`).parentElement;
    selectedServices.removeChild(serviceItem);

    const newAvailableService = document.createElement('li');
    newAvailableService.id = serviceId;
    newAvailableService.className = 'flex justify-between items-center p-3 border rounded-lg combo-card-dark';
    newAvailableService.innerHTML = `
        <span>${serviceName}</span>
        <span class="text-green-600">+ R$ ${servicePrice.toFixed(2)}</span>
        <input type="number" min="1" value="1" class="w-16 p-1 border rounded-lg" id="${serviceId}-people">
        <button onclick="addService('${serviceId}', '${serviceName}', ${servicePrice}, '${serviceId}-people')" class="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">Adicionar</button>
    `;
    availableServices.appendChild(newAvailableService);

    totalAdditional -= servicePrice * numberOfPeople;
    totalAdditionalElement.textContent = `R$ ${totalAdditional.toFixed(2)}`;
}