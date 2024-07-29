import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const validCredentials = [
    { Email: "123@gmail.com", Password: "123" },
    { Email: "456@gmail.com", Password: "456" },
    { Email: "789@gmail.com ", Password: "789" },
    //Add as Per Your Requirements
];

const ApiService = {
    login: async (c) => {
        const { Email, Password } = c;
        try {
            const isValidUser = validCredentials.some(
                (cred) => cred.Email === Email && cred.Password === Password
            );

            if (isValidUser) {
                return { success: true };
            } else {
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
