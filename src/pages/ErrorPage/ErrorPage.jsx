import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/"); 
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
            }}
        >
            <img
            className="w-40" 
            src="https://i.ibb.co.com/BnpySCf/error-Icon-removebg-preview.png" alt="" />
            <h2
                style={{
                    fontSize: "2rem",
                    color: "#333",
                    margin: "10px 0",
                }}
            >
                Page Not Found
            </h2>
            <p
                style={{
                    fontSize: "1rem",
                    color: "#666",
                    marginBottom: "20px",
                }}
            >
                Sorry, the page you are looking for does not exist.
            </p>
            <button
                onClick={handleGoHome}
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    color: "#fff",
                    backgroundColor: "#E04006",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#E04006")}
            >
                Go Home
            </button>
        </div>
    );
};

export default ErrorPage;