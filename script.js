// masalalae
// 1.
// Tug‘ilgan yil (o‘zgarmas qiymat): O‘quvchining tug‘ilgan yilini saqlash uchun o‘zgaruvchi
// yarating. Bu qiymat keyinchalik o‘zgarmasligi kerak. Qaysi kalit so‘zdan ( let , const yoki var )
// foydalanish to‘g‘ri? Sababini izohlang.
const tugilganYil = 2008;
console.log(tugilganYil);

// =================================================

// 2. Do‘kondagi mahsulot soni: Do‘konda dastlab 15 ta olma bor edi. Xaridor 4 tasini oldi, keyin
// ombordan yana 10 ta keltirildi. Yakuniy olma sonini o‘zgaruvchida saqlang va qiymatini
// yangilang.

let mahsulot = 15;
let Xaridor = mahsulot - 4;
let ombor = Xaridor + 10;
console.log(ombor);

//===============================================

// 3. O‘zgartirishga urinish: const pi = 3.14; deb e’lon qiling va keyingi qatorda pi = 3.15;
// deb qiymatini o‘zgartirib ko‘ring. Konsolda qanday xatolik (error) chiqadi?

const pi = 3.14;
// pi = 3.15;
// javob: type error

// =============================================

// 4. Eski usul ( var ) va qayta e’lon qilish: var shahar = "Farg‘ona"; deb yozing va pastroqda
// yana var shahar = "Toshkent"; deb yozib ko‘ring. Bu holat let bilan qanday farq qiladi?

var shahar = "fargona";
var shahar = "toshkent";

// let shahar = "fargona";
// shahar = toshkent;

// javob: syntax error chiqadi|| varda qayta elon qiladi va ozgartiradi || letda qayta elon qilsa bolmaydi lekin ozgartirsa boladi

// ==============================================

// 5. Profil ma’lumotlari: Foydalanuvchining ismi ( "Aziza" ), yoshi ( 17 ) va o‘qishga kirgan kirmagani ( true ) uchun mos o‘zgaruvchilar yarating. Qaysi biri o‘zgarishi mumkin, qaysisi
// o‘zgarmas bo‘lishi kerak?

const ism = "Aziza";
let age = 17;
var isStudied = true;
console.log(ism, age, isStudied);

// =============================================

// 6. Sonmi yoki matnmi? Quyidagi qiymatlarning ma’lumot turini aniqlang ( typeof orqali tekshiring):
// "2026"
// 2026
// true
// "true"

// javob: "2026" va "true"-matn ----string || 2026 - son -----number || true -----boolean.

// ================================================

// 7. Bo‘sh quti ( null vs undefined ): Bir o‘zgaruvchiga hech qanday qiymat bermay e’lon qiling
// ( let natija; ), ikkinchisiga esa let javob = null; deb yozing. Ikkalasining ma’lumot turi va
// ma’nosidagi farqni tushuntiring.

let natija;
let javob = null;

console.log(natija);
console.log(javob);

console.log(typeof natija);
console.log(typeof javob);

// javob: agar ozgaruvchiga qiymat berilmasa ---- undefined || null esa ozgaruvchi hozircha bosh

// ======================================

// 8.Telefon raqami va narx: Telefon raqamini ( "+998901234567" ) va daftar narxini ( 12000 )
// alohida o‘zgaruvchilarga saqlang. Nima uchun telefon raqamini matn ( string ) ko‘rinishida
// saqlash qulayroq?

var telRaqam = "+998901234567";
var narx = 12000n;
console.log(telRaqam, narx);

// agar number bolsa + bilan bogliq muammolar kelib chiqishi mumkin

// =========================================

// 9. Mantiqiy holat ( boolean ): Chiroq yoniq yoki o‘chiqligini bildiruvchi chiroqYoniq
// o‘zgaruvchisini yarating. Uning qiymatini avval false , keyin true qilib o‘zgartiring.

let chiroqYoniq = true;
let chiroqYoniq2 = false;
console.log(chiroqYoniq, chiroqYoniq2);

// =============================================

// 10. Yashirin son ( "5" + 3 ): Konsolga "5" + 3 va 5 + 3 natijalarini chiqaring. Nima uchun biri
// "53" bo‘ladi-yu, ikkinchisi 8 chiqadi?

let qoshish = 5 + 3;
let qoshish2 = "5" + 3;

console.log(qoshish, qoshish2);

// "5" bu string va 3 bu number java script string va numberni qoshib oqiyapti.

// ===============================================

// 11. Bozorlik hisobi: Siz 25 000 so‘mga non, 18 000 so‘mga sut va 12 000 so‘mga qatiq
// oldingiz. Jami qancha pul sarflaganingizni + operatori yordamida hisoblang.

let non = 25000n;
let sut = 18000n;
let qatiq = 12000n;
let umumiy = non + sut + qatiq;
console.log(umumiy);

// ===========================================================

// 12. Qaytim olish: Sizda 100 000 so‘m bor. 64 000 so‘mlik mahsulot xarid qildingiz. Sizga qancha
// qaytim qolishini - operatori bilan toping.

let menda = 100000n;
let mahsulot33 = 64000n;
let qaytim = menda - mahsulot33;
console.log(qaytim);

// ========================================================

// 13. Daftarning umumiy narxi: Bitta daftar 4 500 so‘m turadi. 7 ta daftar olsangiz, qancha
// to‘laysiz? ( * operatoridan foydalaning).

let daftar = 4500;
let olaman = 7;
let hisob = daftar * olaman;
console.log(hisob);

// ==================================================

// 14. Pitsani bo‘lish: 8 bo‘lakli pitsani 4 nafar do‘st teng bo‘lib yemoqchi. Har biriga necha bo‘lakdan
// to‘g‘ri keladi? ( / operatori).

let pitsa = 8;
let dost = 4;
let bolish = pitsa / dost;
console.log(bolish);

// =================================================

// 15. Juft yoki toq ( % qoldiq): Biror butun son berilgan (masalan, 17 ). Shu sonni 2 ga bo‘lgandagi
// qoldiqni % operatori yordamida toping. Qoldiq 0 bo‘lsa juft, 1 bo‘lsa toq bo‘lishini tushuntiring.

let butunSon = 17;
let bolinadiganSaon = 2;
let bolish77 = butunSon % bolinadiganSaon;
let natija11 = "toq";
console.log(bolish77);

// ===============================================

// 16. Kvadrat maydon: Kvadrat shaklidagi xonaning bir tomoni 6 metr. Xonaning yuzasini ( 6 * 6
// yoki ** daraja operatori yordamida) hisoblang.

let xonaTomon1 = 6;
let xonaTomon2 = 6;
let xonaYuzi = xonaTomon1 * xonaTomon2;
console.log(xonaYuzi);

// ================================================

// 17. Soat va daqiqa: 135 daqiqa necha soat-u necha daqiqa bo‘ladi? Bo‘lish ( / ) va qoldiq ( % )
// operatorlaridan foydalanib toping

let berilgan = 135;
let soat = 60;
let find = berilgan / soat;
console.log(find);

// ====================================================

// 18. Chegirma hisobi: 200 000 so‘mlik futbolkaga 15% chegirma berildi. Chegirma summasini va
// yakuniy to‘lov summasini arifmetik operatorlar yordamida hisoblang.

let futbolka = 200000;
let foiz = 100;
let chegirma = 15;
let foiz1 = futbolka / foiz;
let chegirmaSummasi = foiz1 * chegirma;
console.log(chegirmaSummasi);

// =====================================================

// 19. Haftalik yo‘l haqi: Bir kunda avtobusga borish-kelish uchun 4 000 so‘m ketadi. O‘quvchi 5 kun
// o‘qishga borsa, bir haftada jami qancha yo‘l haqi sarflaydi?

let kunlik = 4000;
let kun = 5;
let Haftalik = kunlik * kun;
console.log(Haftalik);

// ==========================================================

// 20. Konfet ulashish: 23 ta konfetni 5 ta bolaga teng bo‘lib bering. Har bir bolaga nechta konfet
// tegadi va ortiqcha nechta konfet qoladi?

let konfet = 23;
let bola = 5;
let HarBirBolaga1 = konfet / bola;
let HarBirBolaga = konfet % bola;
console.log(HarBirBolaga1, HarBirBolaga);
