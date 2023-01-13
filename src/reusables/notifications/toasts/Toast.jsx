function Toast({ message, type }) {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
    </div>
  );
}

export default Toast;
