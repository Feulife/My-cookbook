import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootclasses = [cl.MyModal];

  if (visible) {
    rootclasses.push(cl.active);
  }

  return (
    <div className={rootclasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.MyModalContent} onClick={(e) => e.preventDefault()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
