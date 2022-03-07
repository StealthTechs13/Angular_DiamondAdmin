export class SIgnUpModel {
    id:number;
    UserName: string;
    Name:string;
    Password: string;
    ReferById:number;
    role: string;
    Agent: string;
    SuperAgent: string;
    Master: string;
    SubAdmin: string;
    Admin: string;
    BetStatus: boolean;
    FancyBetStatus: boolean;
    CreditLimit: number;
    ExposureLimit: number;
    UserLimit: number;
    IsValidToken: string;
    IpAddress: string;
    status: boolean;
    deleted:boolean;
}
