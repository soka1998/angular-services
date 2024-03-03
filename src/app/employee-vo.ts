export class EmployeeVo {
    id: number;
firstname: string;
lastname: string;
constructor(id: number, firstname: string, lastname: string) {
this.id = id;
this.firstname = firstname;

this.lastname = lastname;
}
getId(): number {
return this.id;
}
getLastname(): string {
return this.lastname;
}
getFirstname(): string {
return this.firstname;
}
setId(id:number) {
this.id=id;
}
setFirstname(firstname:string) {
this.firstname=firstname;
}
setLastname(lastname:string) {
this.lastname=lastname;
}
}
