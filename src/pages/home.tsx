import { Helmet } from 'react-helmet-async';
import { HomeView } from 'src/sections/home/view/home-view';


// ----------------------------------------------------------------------

const metadata = {
    title: 'SenEduc',
    description:
        'Saas éducatif destinée aux établissement scolaire',
};

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Helmet>

            <HomeView />
        </>
    );
}
