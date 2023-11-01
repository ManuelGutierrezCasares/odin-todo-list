export function prepareFormContainer(){
    const form = document.createElement('form');
    form.classList.add('col-3', 'mx-auto');
    form.id = 'form';
    return form;
}

function prepareFormDiv(){
    const div = document.createElement('div');
    div.classList.add('mb-3');
    return div;
}

export function prepareFormH1(){
    const h1Div = prepareFormDiv();
    const h1Text = document.createElement('h1');

    h1Div.appendChild(h1Text);
    return h1Div;
}

export function prepareFormTitle(){
    const titleDiv = prepareFormDiv();
    const titleLabel = document.createElement('label'); 
    const titleText = document.createElement('input');

    titleLabel.classList.add('form-label')
    titleLabel.for = 'title';
    titleLabel.innerText = 'Title';

    titleText.classList.add('form-control');
    titleText.type = 'text';
    titleText.id = 'title';
    
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleText);

    return titleDiv;
}

export function prepareFormDueDate(){
    const dueDateDiv = prepareFormDiv();
    const dueDateLabel = document.createElement('label'); 
    const dueDateText = document.createElement('input');

    dueDateLabel.classList.add('form-label');
    dueDateLabel.for = 'dueDate';
    dueDateLabel.innerText = 'Due Date';

    dueDateText.classList.add('form-control');
    dueDateText.type = 'date';
    dueDateText.id = 'dueDate';

    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateText);

    return dueDateDiv;
}

export function prepareFormDescription(){
    const descriptionDiv = prepareFormDiv();
    const descriptionLabel = document.createElement('label'); 
    const descriptionText = document.createElement('input');

    descriptionLabel.classList.add('form-label')
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = 'Description';

    descriptionText.classList.add('form-control');
    descriptionText.type = 'text';
    descriptionText.id = 'description';
    
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionText);

    return descriptionDiv;
}

export function prepareFormButton(){
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.type = 'submit';
    btn.innerText = 'Submit';
    btn.id = 'submit';
    return btn;
}


export function prepareFormPriority(){
    const priorityDiv = prepareFormDiv();
    const btnradio1 = document.createElement('input');
    const labelradio1 = document.createElement('label');
    const btnradio2 = document.createElement('input');
    const labelradio2 = document.createElement('label');
    const btnradio3 = document.createElement('input');
    const labelradio3 = document.createElement('label');

    priorityDiv.classList.add('btn-group');
    priorityDiv.role = 'group';
    priorityDiv.ariaLabel = 'Basic radio toggle button group';

    btnradio1.type = 'radio';
    btnradio1.classList.add('btn-check');
    btnradio1.name = 'btnradio';
    btnradio1.id = 'high';
    btnradio1.autocomplete = 'off';
    btnradio1.checked = true; 

    labelradio1.classList.add('btn', 'btn-outline-primary');
    labelradio1.htmlFor = 'high';
    labelradio1.innerText = 'High';

    btnradio2.type = 'radio';
    btnradio2.classList.add('btn-check');
    btnradio2.name = 'btnradio';
    btnradio2.id = 'medium';
    btnradio2.autocomplete = 'off';

    labelradio2.classList.add('btn', 'btn-outline-primary');
    labelradio2.htmlFor = 'medium';
    labelradio2.innerText = 'Medium';

    btnradio3.type = 'radio';
    btnradio3.classList.add('btn-check');
    btnradio3.name = 'btnradio';
    btnradio3.id = 'low';
    btnradio3.autocomplete = 'off';

    labelradio3.classList.add('btn', 'btn-outline-primary');
    labelradio3.htmlFor = 'low';
    labelradio3.innerText = 'Low';    

    priorityDiv.appendChild(btnradio1);
    priorityDiv.appendChild(labelradio1);
    priorityDiv.appendChild(btnradio2);
    priorityDiv.appendChild(labelradio2);
    priorityDiv.appendChild(btnradio3);
    priorityDiv.appendChild(labelradio3);

    return priorityDiv;
}

export function prepareFormNote(){
    const noteDiv = prepareFormDiv();
    const noteText = document.createElement('textarea');
    const noteLabel = document.createElement('label'); 

    noteLabel.classList.add('form-label')
    noteLabel.for = 'note';
    noteLabel.innerText = 'Notes';
    
    noteText.classList.add('form-control');
    noteText.id = 'note';
    noteText.placeholder = 'Leave your notes here';
    
    noteDiv.appendChild(noteLabel);
    noteDiv.appendChild(noteText);

    return noteDiv;
}