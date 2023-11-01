import { prepareFormContainer, prepareFormH1, prepareFormTitle, prepareFormDueDate, prepareFormDescription, prepareFormButton } from './prepareFormHelpers';

export function createProjectForm(){
    const content = document.getElementById('content');
    
    const form = prepareFormContainer();
    const h1 = prepareFormH1();
    const title = prepareFormTitle();
    const dueDate = prepareFormDueDate();
    const description = prepareFormDescription();
    const btn = prepareFormButton();
  
    
    form.appendChild(h1);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(btn);
    
    content.appendChild(form);

    return content;
}





