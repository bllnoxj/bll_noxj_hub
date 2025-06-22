// =================================================================
// OPTION 1 : SON DE CLIC GÉNÉRÉ (ACTUELLEMENT ACTIF)
// Pour changer le volume, modifiez la valeur dans gainNode.gain.setValueAtTime(0.8, ...)
// 0.1 = très silencieux, 1.0 = volume maximum.
// =================================================================

// Fonction pour créer et jouer le son de clic généré
function playGeneratedClickSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    // === VOLUME RÉGLABLE ICI ===
    // J'ai augmenté le volume de 0.2 à 0.8
    gainNode.gain.setValueAtTime(0.8, audioContext.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}


// =================================================================
// OPTION 2 : UTILISER VOTRE PROPRE FICHIER SON
// Pour utiliser cette option :
// 1. Placez votre fichier son (ex: "clic.mp3") dans le dossier "bll_noxj_hub".
// 2. Dans le code ci-dessous, commentez la ligne "playGeneratedClickSound();".
// 3. Décommentez la ligne "playSoundFile('votre-son.mp3');" et remplacez 'votre-son.mp3' 
//    par le nom de votre fichier.
// =================================================================

function playSoundFile(filePath) {
    const audio = new Audio(filePath);
    audio.play();
}


// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.category a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            // C'est ici que le son est appelé
            // playGeneratedClickSound(); // Ajoutez "//" au début de cette ligne
            
            // Pour utiliser votre son, commentez la ligne ci-dessus et décommentez la suivante :
            playSoundFile('clic de souris.mp3'); // Enlevez "//" et mettez le nom de votre fichier
        });
    });
});
