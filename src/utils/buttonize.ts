type buttonizeType = {
  role: string;
  onClick: () => void;
};

export default (handlerFn: () => void): buttonizeType => ({
  role: 'button',
  onClick: handlerFn,
});
