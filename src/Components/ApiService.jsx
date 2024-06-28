import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ApiService = {
    login: async (credentials) => {
        const { Email, Password } = credentials;
        try {
            if (Email =="123@gmail.com" && Password =="123") {
                return { success: true }; 
            } else {
                const MySwal = withReactContent(Swal)

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email and Password is Incorrect",
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    }
};

export default ApiService;
