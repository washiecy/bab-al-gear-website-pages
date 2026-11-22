const form = document.querySelector('#waitlist-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  status.textContent = 'Thank you — your place on the launch list is ready to be confirmed.';
  const subject = encodeURIComponent('Bab Al Gear waitlist');
  const body = encodeURIComponent(`Please add ${email} to the Bab Al Gear launch waitlist.`);
  setTimeout(() => { window.location.href = `mailto:hello@babalgear.ae?subject=${subject}&body=${body}`; }, 500);
});
