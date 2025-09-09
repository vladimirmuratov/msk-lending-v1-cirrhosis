import { Banner } from '@/components/Banner';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            <PhoneBlock
                style={{
                    paddingTop: { xs: '50px', sm: '100px' },
                    paddingBottom: { xs: '50px', sm: '50px' },
                }}
                text="Эффективное лечение цирроза печени. Звоните!"
            />
            {/*<CardsBlock />*/}
            <MainInfoBlock />
            {/*<AboutBlock />*/}
            {/*<WhyWeBlock />*/}
            {/*<WeRespondBlock />*/}
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            {/*<CoordinatorBlock />*/}
            {/*<PartnersBlock />*/}
            <PhoneBlock text="Более подробная информация по телефону. Позвоните и мы ответим на все ваши вопросы!" />
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            {/*<TextBlock text={text1} />*/}
            <ContactsBlock />
            <FormAction />
        </main>
    );
}
