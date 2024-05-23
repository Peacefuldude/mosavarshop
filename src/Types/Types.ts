export interface searchCoinProps {
    coin: string;
    setCoin: (coin: string) => void;
}

export interface submitSearchProps {
    currentFramework: string;
    submit: boolean;
    setSubmit: (submit: boolean) => void;
}

export interface cardsProps {
    coinForCard: string;
    submitForCard: boolean;
}

export interface cardsDetailsProps {
    isOpen: boolean;
    name: string;
    rank: string;
    priceUsd: string;
    volumeUsd24Hr: string;
    marketCapUsd: string;
    changePercent24Hr: string;
    closeModel: () => void;
}

export interface formsProps {
    formsIsOpen: boolean;
    formsCloseModel: () => void;
}
