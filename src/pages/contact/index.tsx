import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ContactView } from 'src/sections/contact/view/contact-view';


// ----------------------------------------------------------------------

const metadata = { title: `Contact - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {metadata.title}</title>
            </Helmet>

            <ContactView />
        </>
    );
}
