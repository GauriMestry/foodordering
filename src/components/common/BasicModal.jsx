import { Modal } from "antd";
const BasicModal = ({ data, isModalOpen, setIsModalOpen, title, okType }) => {
  const { rating, totalRatingsString } = data;
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      okType={okType}
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
      centered={true}
    >
      <p>Average Rating Stars: {rating}</p>
      <p>total Ratings count: {totalRatingsString}</p>
    </Modal>
  );
};
export default BasicModal;
