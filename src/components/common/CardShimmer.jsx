import { Flex, Skeleton } from "antd";

export const CardShimmer = () => (
  <Flex vertical gap={2} style={{ height: 400, width: 300 }}>
    <Skeleton.Image active style={{ height: 400, width: 300 }} />
    <Skeleton.Input active style={{ height: 50, width: 300 }} />
    <Skeleton.Input active style={{ height: 50, width: 300 }} />
  </Flex>
);

export const RestCardInfoShimmer = () => (
  <Flex vertical gap={2} style={{ height: 400, width: "90%" }}>
    <Skeleton.Input active style={{ height: 50, width: "100%" }} />
    <Skeleton.Node active style={{ height: 300, width: "100%" }} />
    <Skeleton.Input active style={{ height: 50, width: "100%" }} />
  </Flex>
);

export const HomeCardsLoader = () => (
  <>
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
    <CardShimmer />
  </>
);
