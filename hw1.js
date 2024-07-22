// 1.程式基本元素
    // a. 印出10個你知道的關鍵字
        console.log("if, else, while, for, var, int, boolean, float, typeof, break")

    // b. 宣告一圓周率常數，值為3.14，並取一個適當的常數名稱
        let PI = 3.14
        console.log(PI)

    // c. 宣告兩個變數: 1.用來存你的名字，2.用來存你的年紀，並印出。 請使用適當的變數名
        let Name = "Risa"
        let Age = "28"
        console.log(Name, Age)

// 2.運算子
    // a. 請用程式算出1天又10小時又17分又36秒，共等於幾秒
        let sec1 = (24*60*60)+(10*60*60)+(17*60)+36
        console.log("1天又10小時又17分又36秒 = "+sec+"秒")

    // b. 請用程式算出93784秒，是幾天又幾小時又幾分又幾秒
        let question = 93784
        let day = Math.floor(question/60/60/24)
        let hour = Math.floor((question-day*60*60*24)/60/60)
        let min = Math.floor((question-(day*60*60*24+hour*60*60))/60)
        let sec2 = question-(day*60*60*24+hour*60*60+min*60)
        console.log(`93784秒 = ${day}天又${hour}小時又${min}分鐘又${sec2}秒`)

    // c. 請用 變數 及 運算式 表示: 如果 有筆電 且 有網路，就可以在家工作
        var havelaptop = true
        var haveinternet = true
        if (havelaptap && haveinternet)
            console.log("在家工作")
        else
            console.log("進公司上班")

    // d. Reds 在寫 JavaScript 作業，電腦開機需要 1 分鐘，打開 VS Code 需要 2 分鐘，寫 1 題作業需要 3 分鐘，且 Reds 每天都會將電腦關機。
        //  Reds 分 2 天寫，第一天連續寫 3 題目，第二天連續寫 2 題，請用程式算出 Reds 共花多少時間
        let opnePC = 1
        let openVScode = 2
        let write = 3

        let day1 = opnePC+openVScode+write*3
        let day2 = opnePC+openVScode+write*2
        console.log("Reds兩天共花"+(day1+day2)+"分鐘寫作業")

    // e. 請設計一程式，含有 1 個正整數變數 n，可隨機印出一個介於 1~n 的整數
        // 提示1: 產生 (偽) 亂數    
        // 以下程式，會回傳介於 0~1 (可能為 0，但不可能為 1) 的數   
        // Math.random();
        // 提示2: 轉換成整數
        // 以下程式，會將value轉成整數並回傳
        // Math.trunc(value);
        let show = ""
        let n = Math.trunc(Math.random()*10)
        for (let i=0; i<=n; i++)
        {
            show+=i+ " "
        }
        console.log(show)

// 3.流程控制
    // a.有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
        let n = Math.trunc(Math.random()*100)
        let quotient3 = Math.floor(n/3)
        let quotient4 = Math.floor(n/4)
        let temp1 = 0
        let temp2 = 0
        for (let i = 0; i <= quotient3; i++){
            temp1 += 3*quotient3
        }
        for (let i = 0; i <= quotient4; i++){
            temp2 += 4*quotient4
        }
        let total = temp1 + temp2;
        console.log(`n=${n}, 3的倍數和4的倍數的總和=${total}`)

    // b.請用迴圈印出以下內容
    // 18 27 36 45 54 63 72 81
    // 16 24 32 40 48 56 64
    // 14 21 28 35 42 49
    // 12 18 24 30 36
    // 10 15 20 25
    // 8 12 16
    // 6  9
    // 4
        let num = ""
        for (let i=9; i>0; i--)
        {
            for (let j=1; j<=i; j++)
            {
                    num += i*(j+1)+" "
            } num+= "\n"
        }
        console.log(num)

    // c.請用迴圈印出以下內容..
    // 2 5 8 11 14 17 20 23 26 29 32
        let print = ""
        for (let i=2; i<32; i+=3)
            {
                print+=i+" "
            }
        console.log(print)

    // d. 請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
        let n = Math.floor(Math.random()*100)
        let sum = 0

        for (let i = 2; i <= n; i++)
            if (isPrime(i))
            {
                sum += i
            }
        console.log(`1~${n}質數總和=${sum}`)
        
        function isPrime(number) {
            for (let j = 2; j < number; j++) {
                if (number % j == 0)
                {
                    return false
                }    
            }
            return true
        }

    // e.請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天  *註: 需考慮閏年
        let year = 2024
        let month = 2
        let day = 0
        let temp = ""
        let bigMonth = [1,3,5,7,8,10,12]
        let smallMonth = [4,6,9,11]

        function isNormalDay(){
            if (year%4 == 0){
                if (year%100 == 0){
                    if (year%400 == 0){
                    temp = "閏年"
                    }else{
                    temp = "平年"}
                }else{
                temp = "閏年"}
            }else{
            temp = "平年"}
        
            if (bigMonth.indexOf(month) >= 0){
                day = 31}
            else if (smallMonth.indexOf(month) >= 0){
                day = 30}
            else if (month == 2 && temp == "平年"){
                day = 28}
            else if (month == 2 && temp == "閏年"){
                day = 29}
        }
        isNormalDay();
        console.log(`${year}年是${temp}, ${month}月有${day}天`)
        

// 4.陣列
    // a.請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
        let arr = []
        let n = Math.floor(Math.random()*10)
        for (let i = 0; i < 5; i++)
        {
            while (arr.indexOf(n) >= 0)
            {
                n = Math.floor(Math.random()*10)
            }
        arr[i] = n
        }
        console.log(arr)

    // b.(續上題) 請印出陣列所有元素的總和、平均值
        let sum = 0
        let avg = 0
        for (let i = 0; i < arr.length; i++)
            sum += arr[i]
        avg = sum / arr.length
        console.log(`陣列元素總和=${sum}\n陣列元素平均=${avg}`)

    // c.(續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
    //    否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
        console.log(arr.sort())
        
        for (let i = 0; i < arr.length; i++)
        {
            if (arr.indexOf(avg) == avg)
            {
                console.log("陣列中和平均值相同的元素是"+arr[i])
            }else if (arr[i] < avg && avg < arr[i+1])
                console.log(`${avg}介於${arr[i]}和${arr[i+1]}之間`)
            
        }

    // d. 有一字串陣列內容如下
    // const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
    // 請統計並印出陣列內每個字母各有幾個，EX: a: 4  c: 2
        const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift']
        let str = mySkills.join()
        function letter(n) 
        {
            let count = 0;
            for (let i = 0; i < str.length; i++) 
                if (str[i] == n) 
                count++;
            console.log(`${n} : ${count}`);
        }

        letter("j");
        letter("a");
        letter("v");
        letter("s");
        letter("c");
        letter("r");
        letter("i");
        letter("p");
        letter("t");
        letter("q");
        letter("l");
        letter("y");
        letter("h");
        letter("o");
        letter("n");
        letter("w");
        letter("f");

    // e.請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
        //  [ 18, 27, 36, 45, 54, 63, 72, 81 ],
        //  [ 16, 24, 32, 40, 48, 56, 64 ],
        //  [ 14, 21, 28, 35, 42, 49 ],
        //  [ 12, 18, 24, 30, 36 ],
        //  [ 10, 15, 20, 25 ],
        //  [ 8, 12, 16 ],
        //  [ 6, 9 ],
        //  [ 4 ]
        
        let arr = []
        for (let i = 9; i >=2; i--)
        {
            let addarr = []
            for (j = 2; j <= i; j++)
            {
                addarr.push(i*j)
            }arr.push(addarr)
        }
        console.log(arr)