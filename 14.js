/* প্রতি দি ন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডি উল আনলক কর ো
২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছু বুঝতে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লুপ ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।
14) উপরে র প্রব্লে মটাই while লুপ রি ভার্স ওয়ে তে (decremental হি সে বে )করে দে খাও */
let dailyWork = ['module unlock',
    'video practise',
    'take notes',
    'self practise',
    'bujechi',
    'bujhonai? google koro',
    'scroll group',
    '#help post dao',
    'ekhono bujhonai? chintar karon nei',
    'join support session']
var i = dailyWork.length - 1;
while (i >= 0) {
    console.log(dailyWork[i]);
    i--;
}