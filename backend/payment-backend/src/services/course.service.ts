import Payment from "../models/payment.model";

interface Course {
    courseName: string,
    userid: string,
    username: string,
    price: number,
    status:string,
    date:string
}

export async function addpayment(course: Course) {
    try {
        const newpayment = new Payment(
            course
        );
        const res = await newpayment.save()
        return res
    } catch (err: any) {
        return (err);
    }
}

export async function findPaymentById(code: string) {
    const existingcourse = await Payment.findOne({ code });
    const corse = JSON.parse(JSON.stringify(existingcourse))
    return corse;

}

export async function findPaymentByname(code: string,c_name:string) {
    const existingcourse = await Payment.findOne({ code,c_name });
    const corse = JSON.parse(JSON.stringify(existingcourse))
    
    return corse;


}


export async function getPayment(id:string) {
    try {
        const res = await Payment.find({user:id})
        return res
    } catch (err: any) {
        return (err);
    }
}
export async function getallPayment() {
    try {
        const res = await Payment.find()
        return res
    } catch (err: any) {
        return (err);
    }
}

export async function getPaymentById(id:string) {
    try {
        const res = await Payment.findById(id)
        return res
    } catch (err: any) {
        return (err);
    }
}

export async function updatePaymentById(id:string,course:Course) {
    try {
        const res = await Payment.findByIdAndUpdate(id , course)
        return res
    } catch (err: any) {
        return ({status : "error with update course" , error : err.message})
    }

}

export async function deletePaymentById(id:string) {
    try {
        const res = await Payment.findByIdAndDelete(id)
        return res
    } catch (err: any) {
        return ({status : "error with delete course" , error : err.message})
    }

}