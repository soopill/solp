export default function Tabs({ children, button, buttonContainer = "menu" }) {
  const ButtonsContainer = buttonContainer;
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}
