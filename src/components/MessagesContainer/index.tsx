import { Bounce, ToastContainer } from "react-toastify";

type MessagesContainerProps = {
  children: React.ReactNode;
};

const MessagesContainer = ({ children }: MessagesContainerProps) => {
  return (
    <>
      {children}

      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default MessagesContainer;
