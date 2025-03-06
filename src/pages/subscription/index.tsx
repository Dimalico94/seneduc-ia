import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { SubscriptionView } from 'src/sections/subscription/view/subscription-view';


// ----------------------------------------------------------------------

const metadata = { title: `Souscription - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {metadata.title}</title>
            </Helmet>

            <SubscriptionView />
        </>
    );
}
