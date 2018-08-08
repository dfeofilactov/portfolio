import anime from 'animejs';

const Animations = (() => {
    const Start = () => {
        anime({
            targets: '#a-welcome',
            translateX: 25
        });
    };

    return {
        Start
    };
})();

export default Animations;