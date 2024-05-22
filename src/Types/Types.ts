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

export interface cardSearchPhoneProps {
    isOpen: boolean;
    name: string;
    rank: string;
    priceUsd: string;
    volumeUsd24Hr: string;
    marketCapUsd: string;
    changePercent24Hr: string;
    closeModel: () => void;
}

export interface cardAllProps {
    isAllOpen: boolean;
    name: string;
    rank: string;
    priceUsd: string;
    volumeUsd24Hr: string;
    marketCapUsd: string;
    changePercent24Hr: string;
    closeAllModel: () => void;
}
