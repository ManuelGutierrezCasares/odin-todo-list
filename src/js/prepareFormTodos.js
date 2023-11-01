import { prepareFormContainer, prepareFormH1, prepareFormTitle, prepareFormDueDate, prepareFormDescription, prepareFormNote, prepareFormPriority , prepareFormButton } from './prepareFormHelpers';

export function createTodoForm(){
    const content = document.getElementById('content');
    
    const form = prepareFormContainer();
    const h1 = prepareFormH1();
    const title = prepareFormTitle();
    const dueDate = prepareFormDueDate();
    const description = prepareFormDescription();
    const priority = prepareFormPriority();
    const notes = prepareFormNote();
    const btn = prepareFormButton();
  
    
    form.appendChild(h1);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(notes);
    form.appendChild(btn);
    
    content.appendChild(form);

    return content;
}
