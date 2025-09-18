document.addEventListener("DOMContentLoaded", function() {
	
	// font type selection
	const fontTypeSelect = document.getElementById('font-type-select');
    if (fontTypeSelect) {
        const fontMap = {
            'default': 'system-ui, Arial, sans-serif',
            'comic': 'Comic Sans MS, Comic Sans, cursive, sans-serif',
            'roboto': 'Roboto Mono, monospace',
            'dyslexic': 'OpenDyslexic-Regular, Arial, sans-serif',
            'dyslexic-mono': 'OpenDyslexicMono-Regular, monospace',
            'dyslexic-bold': 'OpenDyslexic-Bold, Arial, sans-serif',
            'dyslexic-alt': 'OpenDyslexicAlta-Regular, Arial, sans-serif'
        };
        fontTypeSelect.addEventListener('change', function() {
            const selected = fontTypeSelect.value;
            const fontFamily = fontMap[selected] || fontMap['default'];
            document.body.style.fontFamily = fontFamily;
            document.documentElement.style.fontFamily = fontFamily;
            localStorage.setItem('fontTypePref', selected);
        });
        // Load saved font type preference
        const savedFontType = localStorage.getItem('fontTypePref');
        if (savedFontType && fontMap[savedFontType]) {
            fontTypeSelect.value = savedFontType;
            fontTypeSelect.dispatchEvent(new Event('change'));
        }
    }
	
	// font size selection
	const fontSizeSelect = document.getElementById('font-size-select');
    if (fontSizeSelect) {
        fontSizeSelect.addEventListener('change', function() {
            let size = fontSizeSelect.value;
            let fontSize;
            switch(size) {
                case 'small': fontSize = '90%'; break;
                case 'medium': fontSize = '100%'; break;
                case 'large': fontSize = '120%'; break;
                case 'x-large': fontSize = '140%'; break;
                default: fontSize = '100%';
            }
            document.body.style.fontSize = fontSize;
            document.documentElement.style.fontSize = fontSize;
            localStorage.setItem('fontSizePref', size);
        });
        // Load saved font size preference
        const savedFontSize = localStorage.getItem('fontSizePref');
        if (savedFontSize) {
            fontSizeSelect.value = savedFontSize;
            fontSizeSelect.dispatchEvent(new Event('change'));
        }
    }
	
	// back to top button
	const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

	// settings modal logic
	const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings');
    if (settingsBtn && settingsModal && closeSettings) {
        settingsBtn.addEventListener('click', function() {
            settingsModal.style.display = 'flex';
        });
        closeSettings.addEventListener('click', function() {
            settingsModal.style.display = 'none';
        });
        settingsModal.addEventListener('click', function(e) {
            if (e.target === settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }
	
});