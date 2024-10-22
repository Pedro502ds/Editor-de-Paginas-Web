const textarea = document.getElementById('textarea');
    const iframe = document.getElementById('inframe');

    textarea.addEventListener('input', () => {
      const html = textarea.value;
      iframe.srcdoc = html;
    });

    
    const initialHTML = '<p>¡Pícale aqui!</p>';
    textarea.value = initialHTML;
    iframe.srcdoc = initialHTML;