export interface Product {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: AvailableFilterValue[];
}

export enum AvailableFilterType {
    Boolean = "boolean",
    Range = "range",
    String = "STRING",
    Text = "text",
    TypeString = "string",
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   null | string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: FilterValue[];
}

export interface FilterValue {
    id:             CategoryID;
    name:           string;
    path_from_root: Sort[];
}

export enum CategoryID {
    Mla1744 = "MLA1744",
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                  string;
    site_id:             SiteID;
    title:               string;
    seller:              Seller;
    price:               number;
    prices:              Prices;
    sale_price:          null;
    currency_id:         CurrencyID;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         BuyingMode;
    listing_type_id:     ListingTypeID;
    stop_time:           Date;
    condition:           Condition;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    picture:             Pictures[];
    accepts_mercadopago: boolean;
    installments:        null;
    address:             Address;
    shipping:            Shipping;
    seller_address:      SellerAddress;
    seller_contact:      SellerContact;
    location:            Location;
    attributes:          Attribute[];
    original_price:      null;
    category_id:         CategoryID;
    official_store_id:   number | null;
    domain_id:           DomainID;
    catalog_product_id:  null | string;
    tags:                Tag[];
    order_backend:       number;
    use_thumbnail_id:    boolean;
    offer_score:         null;
    offer_share:         null;
    match_score:         null;
    winner_item_id:      null;
    melicoin:            null;
    discounts:           null;
}

export interface Pictures{
    id: String;
    url: String;

}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    string;
    city_name:  string;
    area_code:  string;
    phone1:     string;
}

export interface Attribute {
    value_struct:         Struct | null;
    source:               number;
    name:                 Name;
    value_id:             null | string;
    values:               AttributeValue[];
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    id:                   ID;
    value_name:           string;
}

export enum AttributeGroupID {
    Adicionales = "ADICIONALES",
    Confort = "CONFORT",
    Dflt = "DFLT",
    Empty = "",
    Find = "FIND",
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Adicionales = "Adicionales",
    Confort = "Confort",
    Empty = "",
    FichaTécnica = "Ficha técnica",
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    Doors = "DOORS",
    Engine = "ENGINE",
    EngineDisplacement = "ENGINE_DISPLACEMENT",
    FuelType = "FUEL_TYPE",
    HasAirConditioning = "HAS_AIR_CONDITIONING",
    ItemCondition = "ITEM_CONDITION",
    Kilometers = "KILOMETERS",
    Length = "LENGTH",
    Model = "MODEL",
    PassengerCapacity = "PASSENGER_CAPACITY",
    Power = "POWER",
    SingleOwner = "SINGLE_OWNER",
    TractionControl = "TRACTION_CONTROL",
    Transmission = "TRANSMISSION",
    Trim = "TRIM",
    VehicleYear = "VEHICLE_YEAR",
    VerifiedVehicles = "VERIFIED_VEHICLES",
}

export enum Name {
    AireAcondicionado = "Aire acondicionado",
    Año = "Año",
    CapacidadDePersonas = "Capacidad de personas",
    Cilindrada = "Cilindrada",
    CondiciónDelÍtem = "Condición del ítem",
    ControlDeTracción = "Control de tracción",
    Kilómetros = "Kilómetros",
    Largo = "Largo",
    Marca = "Marca",
    Modelo = "Modelo",
    Motor = "Motor",
    Potencia = "Potencia",
    Puertas = "Puertas",
    TipoDeCombustible = "Tipo de combustible",
    Transmisión = "Transmisión",
    VehiculosVerificados = "Vehiculos verificados",
    Versión = "Versión",
    ÚnicoDueño = "Único dueño",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    Cc = "cc",
    HP = "hp",
    KM = "km",
    Mm = "mm",
}

export interface AttributeValue {
    id:     null | string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    Classified = "classified",
}

export enum Condition {
    New = "new",
    Used = "used",
}

export enum CurrencyID {
    Ars = "ARS",
    Usd = "USD",
}

export enum DomainID {
    MlaCarsAndVans = "MLA-CARS_AND_VANS",
}

export enum ListingTypeID {
    Gold = "gold",
    GoldPremium = "gold_premium",
}

export interface Location {
    address_line:    string;
    zip_code:        string;
    subneighborhood: null;
    neighborhood:    Sort;
    city:            Sort;
    state:           Sort;
    country:         Sort;
    latitude:        number;
    longitude:       number;
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      ReferencePrice[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: CurrencyID;
}

export interface Price {
    id:                    string;
    type:                  PriceType;
    amount:                number;
    regular_amount:        null;
    currency_id:           CurrencyID;
    last_updated:          Date;
    conditions:            Conditions;
    exchange_rate_context: ExchangeRateContext;
    metadata:              Metadata;
}

export interface Conditions {
    context_restrictions: ContextRestriction[];
    start_time:           Date | null;
    end_time:             Date | null;
    eligible:             boolean;
}

export enum ContextRestriction {
    ChannelMarketplace = "channel_marketplace",
}

export enum ExchangeRateContext {
    Default = "DEFAULT",
}

export interface Metadata {
}

export enum PriceType {
    Standard = "standard",
}

export interface ReferencePrice {
    id:                    string;
    type:                  ReferencePriceType;
    conditions:            Conditions;
    amount:                number;
    currency_id:           CurrencyID;
    exchange_rate_context: ExchangeRateContext;
    tags:                  any[];
    last_updated:          Date;
}

export enum ReferencePriceType {
    MinStandard = "min_standard",
    Was = "was",
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  Date;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               string[];
    seller_reputation:  SellerReputation;
    car_dealer_logo?:   string;
    home_image_url?:    string;
    eshop?:             Eshop;
}

export interface Eshop {
    seller:           number;
    eshop_rubro:      null;
    eshop_id:         number;
    nick_name:        string;
    site_id:          SiteID;
    eshop_logo_url:   string;
    eshop_status_id:  number;
    eshop_experience: number;
    eshop_locations:  any[];
}

export enum SiteID {
    Mla = "MLA",
}

export interface SellerReputation {
    power_seller_status:  null | string;
    level_id:             LevelID | null;
    metrics:              Metrics;
    transactions:         Transactions;
    real_level?:          string;
    protection_end_date?: Date;
}

export enum LevelID {
    The4_LightGreen = "4_light_green",
    The5_Green = "5_green",
}

export interface Metrics {
    cancellations:         Cancellations;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
}

export interface Cancellations {
    period:    CancellationsPeriod;
    rate:      number;
    value:     number;
    excluded?: Excluded;
}

export interface Excluded {
    real_value: number;
    real_rate:  number;
}

export enum CancellationsPeriod {
    The365Days = "365 days",
    The60Days = "60 days",
    The60Months = "60 months",
}

export interface Sales {
    period:    CancellationsPeriod;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    period:    TransactionsPeriod;
    total:     number;
    ratings:   Ratings;
    completed: number;
}

export enum TransactionsPeriod {
    Historic = "historic",
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface SellerContact {
    contact:    string;
    other_info: string;
    area_code:  string;
    phone:      string;
    area_code2: string;
    phone2:     string;
    email:      string;
    webpage:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          Mode;
    tags:          any[];
    logistic_type: Mode | null;
    store_pick_up: boolean;
}

export enum Mode {
    NotSpecified = "not_specified",
}

export enum Tag {
    DraggedVisits = "dragged_visits",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    VerifiedVehicles = "verified_vehicles",
}
