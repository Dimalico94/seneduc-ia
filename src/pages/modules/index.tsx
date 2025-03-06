import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ModulesView } from 'src/sections/modules/view/modules-view';


// ----------------------------------------------------------------------

const metadata = { title: `Modules - ${CONFIG.appName}` };

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {metadata.title}</title>
            </Helmet>

            <ModulesView />
        </>
    );
}
