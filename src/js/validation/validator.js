function projectFormValidator () {
  validateTitle();
  validateDescription();
  validateDueDate();
}

// Client side validations with Validation API
export function validateTitle () {
  const title = document.getElementById('title');

  title.addEventListener('input', function (e) {
    if (!e.target.value) {
      e.target.classList.remove('is-invalid');
      e.target.classList.remove('is-valid');
      return false;
    }
    if (title.validity.tooShort) {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      return false;
    }
    if (title.validity.valid) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      return true;
    }
  });

  // same to return title.classList.contains('is-valid') ? true : false;
  return !!title.classList.contains('is-valid');
}

export function validateDescription () {
  const description = document.getElementById('description');

  description.addEventListener('input', function (e) {
    if (!e.target.value) {
      e.target.classList.remove('is-invalid');
      e.target.classList.remove('is-valid');
      return false;
    }
    if (description.validity.tooShort) {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      return false;
    }
    if (description.validity.valid) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      return true;
    }
  });

  // same to return description.classList.contains('is-valid') ? true : false;
  return !!description.classList.contains('is-valid');
}

export function validateDueDate () {
  const dueDate = document.getElementById('dueDate');

  dueDate.addEventListener('input', function (e) {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (regex.test(e.target.value)) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      return true;
    }
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
    return false;
  });

  // same to return dueDate.classList.contains('is-valid') ? true : false;
  return !!dueDate.classList.contains('is-valid');
}
