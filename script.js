form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        document.getElementById('contact-result').textContent = 'Kérjük, töltsd ki az összes mezőt!';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, message})
        });
        if (response.ok) {
            document.getElementById('contact-result').textContent = 'Üzenet elküldve!';
            form.reset();
        } else {
            document.getElementById('contact-result').textContent = 'Hiba történt az üzenet küldésekor.';
        }
    } catch (err) {
        document.getElementById('contact-result').textContent = 'Hiba történt az üzenet küldésekor.';
    }
});
