export class AddDetailer
{
 
    firstname_textbox = ':nth-child(1) > :nth-child(2) > .relative > .w-full'
    lastname_textbox = '.gap-6 > :nth-child(2) > :nth-child(2) > .relative > .w-full'
    emailaddress_textbox = '.space-y-6 > :nth-child(2) > :nth-child(2) > .relative > .w-full'
    contactnum_textbox = ':nth-child(3) > :nth-child(2) > .relative > .w-full'
    aboutus_textbox = '[class="w-full rounded-xl bg-white placeholder:text-[12px] border-[#E7E7E7] border-[1px] shadow_bg placeholder:text-[var(--text-muted)] py-[14px] px-3 outline-none min-h-[120px]'

    enterfirstname(firstname){
         cy.get(this.firstname_textbox).type(firstname)

    }
    enterlastname(lastname){
        cy.get(this.lastname_textbox).type(lastname)

    }
    enteremailaddress(email){
         cy.get(this.enteremailaddress).type(email)

    }
    entercontactnum(contactnum){
        cy.get(this.contactnum_textbox).type(contactnum)

    }
    enteraboutus(aboutus){
         cy.get(this.aboutus_textbox).click({ force: true }).type(aboutus);


    }
}