import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { PricesView } from 'src/sections/prices/view/prices-view';

// ----------------------------------------------------------------------

const metadata = { title: `Abonnements - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PricesView />
    </>
  );
}
