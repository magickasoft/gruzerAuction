

export const getMessage = ({ nativeEvent }) => {
  const { data } = nativeEvent;
  const parseData = JSON.parse(data);
  console.log('-->',parseData)
};