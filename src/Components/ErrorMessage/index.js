export function ErrorMessage({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "red",
        padding: "10px",
        textTransform: "capitalize",
        marginTop: "10px",
      }}
    >
      {children}
    </div>
  );
}
