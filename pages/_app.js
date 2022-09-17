import { FormProvider } from '../contextFiles/formContext';
import { LoadingProvider } from '../contextFiles/loadingContext';
import '../styles/globals.css';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
    return (<LoadingProvider>
        <FormProvider>
            <Component {...pageProps} />
        </FormProvider>
    </LoadingProvider>);
}

export default MyApp;
