import confetti from "canvas-confetti";

const Confetti = () => {
    let end = Date.now() + (1 * 1000);
    let colors = ['#002EFE','#FEFE00','#25C665 '];
    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 20,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 20,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

export default Confetti;