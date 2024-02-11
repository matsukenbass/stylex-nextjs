import stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
const s = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
    animationName: fadeIn,
    animationDuration: '1s',
  },
  bar: (height) => ({
    height,
  }),
  highlighted: {
    color: 'rebeccapurple',
  },
  redbox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  button: {
    color: {
      default: 'var(--blue-link)',
      ':hover': {
        default: null,
        '@media (hover: hover)': 'scale(1.1)',
      },
      ':active': 'scale(0.9)',
    },
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
  input: {
    // pseudo-element
    '::placeholder': {
      color: '#999',
    },
    color: {
      default: '#333',
      // pseudo-class
      ':invalid': 'red',
    },
  },
  header: {
    position: stylex.firstThatWorks('sticky', '-webkit-sticky', 'fixed'),
  },
});

export default function Home() {
  const height = 10;
  return (
    <main>
      <div {...stylex.props(s.bar(height))} />
      <div className={stylex(s.redbox)} />
      <input className={stylex(s.input)}></input>
      <button className={stylex(s.button)}>push</button>
    </main>
  );
}
