// دالة التحويل الرئيسية
function performConversion() {
    // الحصول على العناصر من DOM
    const inputValue = document.getElementById('inputValue').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('resultValue');
    
    // التحقق من إدخال قيمة صحيحة
    if (inputValue === '' || isNaN(inputValue)) {
        resultElement.textContent = 'الرجاء إدخال رقم صحيح';
        resultElement.style.color = '#dc3545'; // لون أحمر للخطأ
        return;
    }
    
    const numberValue = parseFloat(inputValue);
    
    // التحقق من أن القيمة موجبة (لا تقبل أرقام سالبة) فقط للمسافات
    // درجات الحرارة يمكن أن تكون سالبة
    if (numberValue < 0 && (conversionType === 'milesToKm' || conversionType === 'kmToMiles')) {
        resultElement.textContent = 'المسافة يجب أن تكون موجبة وليس سالبة';
        resultElement.style.color = '#dc3545'; // لون أحمر للخطأ
        return;
    }
    let result;
    let conversionText = '';
    
    // إجراء التحويل بناءً على النوع المختار
    switch (conversionType) {  
        case 'milesToKm':    
            // تحويل من ميل إلى كيلومتر (1 ميل = 1.60934 كم)
            result = numberValue * 1.60934;
          //  conversionText =`كيلومتر${result.toFixed(4)}  = ميل${numberValue} `;
            conversionText="كيلومتر"+result.toFixed(4);
            break;
            
        case 'kmToMiles':
            // تحويل من كيلومتر إلى ميل (1 كم = 0.621371 ميل)
            result = numberValue * 0.621371;
        //    conversionText =  `ميل${result.toFixed(4)} =كيلومتر${numberValue}  ` ;
            conversionText="ميل"+result.toFixed(4);
            break;
            
        case 'fahrenheitToCelsius':
            // تحويل من فهرنهايت إلى مئوية (F إلى C)
            result = (numberValue - 32) * 5/9;
           // conversionText = ` °م${result.toFixed(2)} = °ف${numberValue} `;
           conversionText="°م"+result.toFixed(2);
           break;
           
            
        case 'celsiusToFahrenheit':
            // تحويل من مئوية إلى فهرنهايت (C إلى F)
            result = (numberValue * 9/5) + 32;
        //  conversionText = `°ف${result.toFixed(2)}= °م${numberValue} `;
        conversionText="°ف"+result.toFixed(2);
            break;
            
        default:
            conversionText = 'نوع تحويل غير معروف';
    }
    
    // عرض النتيجة مع تأثير مرئي
    resultElement.textContent = conversionText;
    resultElement.style.color = '#667eea'; // إعادة اللون الأزرق
    
    // إضافة تأثير للنتيجة
    resultElement.classList.add('updated');
    setTimeout(() => {
        resultElement.classList.remove('updated');
    }, 500);
}

// دالة مسح الحقول
function clearAllFields() {
    // مسح حقل الإدخال
    document.getElementById('inputValue').value = '';
    
    // إعادة تعيين القائمة المنسدلة للاختيار الأول
    document.getElementById('conversionType').selectedIndex = 0;
    
    // إعادة تعيين النتيجة
    const resultElement = document.getElementById('resultValue');
    resultElement.textContent = '--';
    resultElement.style.color = '#667eea';
}

// دالة للتحويل عند الضغط على زر Enter
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        performConversion();
    }
}

// تهيئة الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // ربط حدث النقر بزر التحويل
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', performConversion);
    
    // ربط حدث النقر بزر المسح
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', clearAllFields);
    
    // ربط حدث الضغط على مفتاح Enter في حقل الإدخال
    const inputField = document.getElementById('inputValue');
    inputField.addEventListener('keypress', handleEnterKey);
    
    // رسالة تحميل في الكونسول لأغراض التطوير
    console.log('تم تحميل محول الوحدات بنجاح!');
    
    // تعيين التركيز على حقل الإدخال عند تحميل الصفحة
    inputField.focus();
});

// دالة إضافية للتحقق من صحة الإدخال في الوقت الحقيقي
document.getElementById('inputValue').addEventListener('input', function(e) {
    const value = e.target.value;
    // يمكن إضافة تحقق إضافي هنا إذا لزم الأمر
    if (value && !isNaN(value)) {
        e.target.style.borderColor = '#28a745'; // لون أخضر للإدخال الصحيح
    } else if (value) {
        e.target.style.borderColor = '#dc3545'; // لون أحمر للإدخال الخاطئ
    } else {
        e.target.style.borderColor = '#e1e5e9'; // اللون الافتراضي
    }
});