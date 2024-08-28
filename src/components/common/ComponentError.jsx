import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

function ComponentError() {
  const routerError = useRouteError();
  return (
    <Result
      status={routerError?.status}
      title={routerError?.status}
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={"/"}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default ComponentError;
