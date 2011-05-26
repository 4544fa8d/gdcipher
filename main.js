function IsNumber(Expression)
{
	Expression = Expression.toLowerCase();
	RefString = "0123456789.-";
	
	if (Expression.length < 1)
		return (false);

	for (var i = 0; i < Expression.length; i++)
	{
		var ch = Expression.substr(i, 1);
		var a = RefString.indexOf(ch, 0);
		if (a == -1)
		return (false);
	}
	return(true);
}

function SzyfrPolyb_decode(s)
{
	var litera = new Array('a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
	var znaki  = new Array('11','21','31','41','51','12','22','32','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55');
	var wynik = '';
	var tablica = s.split(' ');
	
	//dla każego znaku z tablicy
	for (var i=0;i<tablica.length;i++)
	{
		//znajdź odpowiadającą mu literę
		for (var j=0;j<znaki.length;j++)
		{
			if (tablica[i] == znaki[j])
			{
				wynik += litera[j];
				break;
			}
		}
	}
	return wynik;
}

function SzyfrPolyb_encode(s)
{
	var wynik = '';
	var bufor = s.toLowerCase();
	for (var i=0;i<bufor.length;i++)
	{
		switch(bufor.charAt(i))
		{
			case 'a': wynik+= '11 ';	break;
			case 'b': wynik+= '21 ';	break;
			case 'c': wynik+= '31 ';	break;
			case 'd': wynik+= '41 ';	break;
			case 'e': wynik+= '51 ';	break;
			case 'f': wynik+= '12 ';	break;
			case 'g': wynik+= '22 ';	break;
			case 'h': wynik+= '32 ';	break;
			case 'i','j': wynik+= '42 ';	break;
			case 'k': wynik+= '52 ';	break;
			case 'l': wynik+= '13 ';	break;
			case 'm': wynik+= '23 ';	break;
			case 'n': wynik+= '33 ';	break;
			case 'o': wynik+= '43 ';	break;
			case 'p': wynik+= '53 ';	break;
			case 'q': wynik+= '14 ';	break;
			case 'r': wynik+= '24 ';	break;
			case 's': wynik+= '34 ';	break;
			case 't': wynik+= '44 ';	break;
			case 'u': wynik+= '54 ';	break;
			case 'v': wynik+= '15 ';	break;
			case 'w': wynik+= '25 ';	break;
			case 'x': wynik+= '35 ';	break;
			case 'y': wynik+= '45 ';	break;
			case 'z': wynik+= '55 ';	break;
		}
	}
	return wynik;
}

function SzyfrMorse_decode(s)
{
	var litera = new Array('t','e','a','i','m','n','d','g','k','o','u','w','r','s','b','c','h','j','l','p','q','v','x','y','z','f','1','2','3','4','5','6','7','8','9','0',' ');
	var znaki = new Array('-','.','.-','..','--','-.','-..','--.','-.-','---','..-','.--','.-.','...','-...','-.-.','....','.---','.-..','.--.','--.-','...-','-..-','-.--','--..','..-.','.----','..---','...--','....-','.....','-....','--...','---..','----.','-----','/');
	var wynik = '';
	var tablica = s.split(' ');
	
	//dla każego znaku z tablicy
	for (var i=0;i<tablica.length;i++)
	{
		//znajdź odpowiadającą mu literę
		for (var j=0;j<znaki.length;j++)
		{
			if (tablica[i] == znaki[j])
			{
				wynik += litera[j];
				break;
			}
		}
	}
	return wynik;
}

function SzyfrMorse_encode(s)
{
	var wynik = '';
	var bufor = s.toLowerCase();
	for (var i=0;i<bufor.length;i++)
	{
		switch(bufor.charAt(i))
		{
			case ' ': wynik+= '/ ';		break;
			case 'a': wynik+= '.- ';	break;
			case 'b': wynik+= '-... ';	break;
			case 'c': wynik+= '-.-. ';	break;
			case 'd': wynik+= '-.. ';	break;
			case 'e': wynik+= '. ';		break;
			case 'f': wynik+= '..-. ';	break;
			case 'g': wynik+= '--. ';	break;
			case 'h': wynik+= '.... ';	break;
			case 'i': wynik+= '.. ';	break;
			case 'j': wynik+= '.--- ';	break;
			case 'k': wynik+= '-.- ';	break;
			case 'l': wynik+= '.-.. ';	break;
			case 'm': wynik+= '-- ';	break;
			case 'n': wynik+= '-. ';	break;
			case 'o': wynik+= '--- ';	break;
			case 'p': wynik+= '.--. ';	break;
			case 'q': wynik+= '--.- ';	break;
			case 'r': wynik+= '.-. ';	break;
			case 's': wynik+= '... ';	break;
			case 't': wynik+= '- ';		break;
			case 'u': wynik+= '..- ';	break;
			case 'v': wynik+= '...- ';	break;
			case 'w': wynik+= '.-- ';	break;
			case 'x': wynik+= '-..- ';	break;
			case 'y': wynik+= '-.-- ';	break;
			case 'z': wynik+= '--.. ';	break;
			case '1': wynik+= '.---- ';	break;
			case '2': wynik+= '..--- ';	break;
			case '3': wynik+= '...-- ';	break;
			case '4': wynik+= '....- ';	break;
			case '5': wynik+= '..... ';	break;
			case '6': wynik+= '-.... ';	break;
			case '7': wynik+= '--... ';	break;
			case '8': wynik+= '---.. ';	break;
			case '9': wynik+= '----. ';	break;
			case '0': wynik+= '----- ';	break;
		}
	}
	return wynik;
}

function SzyfrXor_decode(s, key)
{
	var wynik = '';

	for(i=0;i<s.length;i++)
	{
		wynik += String.fromCharCode(key ^ s.charCodeAt(i));
	}
	return wynik;
}

function SzyfrXor_encode(s, key)
{
	var wynik = '';

	for(i=0;i<s.length;++i)
	{
		wynik += String.fromCharCode(key ^ s.charCodeAt(i));
	}
	return wynik;
}

function SzyfrRot13_decode(s)
{
	var wynik = '';
	for (var i=0;i<s.length;i++)
	{
		switch(s.charAt(i))
		{
			case ' ': wynik+=' ';break;
			case 'a': wynik+='n';break;
			case 'b': wynik+='o';break;
			case 'c': wynik+='p';break;
			case 'd': wynik+='q';break;
			case 'e': wynik+='r';break;
			case 'f': wynik+='s';break;
			case 'g': wynik+='t';break;
			case 'h': wynik+='u';break;
			case 'i': wynik+='v';break;
			case 'j': wynik+='w';break;
			case 'k': wynik+='x';break;
			case 'l': wynik+='y';break;
			case 'm': wynik+='z';break;
			case 'n': wynik+='a';break;
			case 'o': wynik+='b';break;
			case 'p': wynik+='c';break;
			case 'q': wynik+='d';break;
			case 'r': wynik+='e';break;
			case 's': wynik+='f';break;
			case 't': wynik+='g';break;
			case 'u': wynik+='h';break;
			case 'v': wynik+='i';break;
			case 'w': wynik+='j';break;
			case 'x': wynik+='k';break;
			case 'y': wynik+='l';break;
			case 'z': wynik+='m';break;
			case 'A': wynik+='N';break;
			case 'B': wynik+='O';break;
			case 'C': wynik+='P';break;
			case 'D': wynik+='Q';break;
			case 'E': wynik+='R';break;
			case 'F': wynik+='S';break;
			case 'G': wynik+='T';break;
			case 'H': wynik+='U';break;
			case 'I': wynik+='V';break;
			case 'J': wynik+='W';break;
			case 'K': wynik+='X';break;
			case 'L': wynik+='Y';break;
			case 'M': wynik+='Z';break;
			case 'N': wynik+='A';break;
			case 'O': wynik+='B';break;
			case 'P': wynik+='C';break;
			case 'Q': wynik+='D';break;
			case 'R': wynik+='E';break;
			case 'S': wynik+='F';break;
			case 'T': wynik+='G';break;
			case 'U': wynik+='H';break;
			case 'V': wynik+='I';break;
			case 'W': wynik+='J';break;
			case 'X': wynik+='K';break;
			case 'Y': wynik+='L';break;
			case 'Z': wynik+='M';break;
		}
	}
	return wynik;
}

function SzyfrRot13_encode(s)
{
	var wynik = '';
	for (var i=0;i<s.length;i++)
	{
		switch(s.charAt(i))
		{
			case ' ': wynik+=' ';break;
			case 'a': wynik+='n';break;
			case 'b': wynik+='o';break;
			case 'c': wynik+='p';break;
			case 'd': wynik+='q';break;
			case 'e': wynik+='r';break;
			case 'f': wynik+='s';break;
			case 'g': wynik+='t';break;
			case 'h': wynik+='u';break;
			case 'i': wynik+='v';break;
			case 'j': wynik+='w';break;
			case 'k': wynik+='x';break;
			case 'l': wynik+='y';break;
			case 'm': wynik+='z';break;
			case 'n': wynik+='a';break;
			case 'o': wynik+='b';break;
			case 'p': wynik+='c';break;
			case 'q': wynik+='d';break;
			case 'r': wynik+='e';break;
			case 's': wynik+='f';break;
			case 't': wynik+='g';break;
			case 'u': wynik+='h';break;
			case 'v': wynik+='i';break;
			case 'w': wynik+='j';break;
			case 'x': wynik+='k';break;
			case 'y': wynik+='l';break;
			case 'z': wynik+='m';break;
			case 'A': wynik+='N';break;
			case 'B': wynik+='O';break;
			case 'C': wynik+='P';break;
			case 'D': wynik+='Q';break;
			case 'E': wynik+='R';break;
			case 'F': wynik+='S';break;
			case 'G': wynik+='T';break;
			case 'H': wynik+='U';break;
			case 'I': wynik+='V';break;
			case 'J': wynik+='W';break;
			case 'K': wynik+='X';break;
			case 'L': wynik+='Y';break;
			case 'M': wynik+='Z';break;
			case 'N': wynik+='A';break;
			case 'O': wynik+='B';break;
			case 'P': wynik+='C';break;
			case 'Q': wynik+='D';break;
			case 'R': wynik+='E';break;
			case 'S': wynik+='F';break;
			case 'T': wynik+='G';break;
			case 'U': wynik+='H';break;
			case 'V': wynik+='I';break;
			case 'W': wynik+='J';break;
			case 'X': wynik+='K';break;
			case 'Y': wynik+='L';break;
			case 'Z': wynik+='M';break;
		}
	}
	return wynik;
}

function SzyfrCezara_decode(s)
{
	var wynik = '';
	for (var i=0;i<s.length;i++)
	{
		switch(s.charAt(i))
		{
			case ' ': wynik+=' ';break;
			case 'd': wynik+='a';break;
			case 'e': wynik+='b';break;
			case 'f': wynik+='c';break;
			case 'g': wynik+='d';break;
			case 'h': wynik+='e';break;
			case 'i': wynik+='f';break;
			case 'j': wynik+='g';break;
			case 'k': wynik+='h';break;
			case 'l': wynik+='i';break;
			case 'm': wynik+='j';break;
			case 'n': wynik+='k';break;
			case 'o': wynik+='l';break;
			case 'p': wynik+='m';break;
			case 'q': wynik+='n';break;
			case 'r': wynik+='o';break;
			case 's': wynik+='p';break;
			case 't': wynik+='q';break;
			case 'u': wynik+='r';break;
			case 'v': wynik+='s';break;
			case 'w': wynik+='t';break;
			case 'x': wynik+='u';break;
			case 'y': wynik+='v';break;
			case 'z': wynik+='w';break;
			case 'a': wynik+='x';break;
			case 'b': wynik+='y';break;
			case 'c': wynik+='z';break;
			case 'D': wynik+='A';break;
			case 'E': wynik+='B';break;
			case 'F': wynik+='C';break;
			case 'G': wynik+='D';break;
			case 'H': wynik+='E';break;
			case 'I': wynik+='F';break;
			case 'J': wynik+='G';break;
			case 'K': wynik+='H';break;
			case 'L': wynik+='I';break;
			case 'M': wynik+='J';break;
			case 'N': wynik+='K';break;
			case 'O': wynik+='L';break;
			case 'P': wynik+='M';break;
			case 'Q': wynik+='N';break;
			case 'R': wynik+='O';break;
			case 'S': wynik+='P';break;
			case 'T': wynik+='Q';break;
			case 'U': wynik+='R';break;
			case 'V': wynik+='S';break;
			case 'W': wynik+='T';break;
			case 'X': wynik+='U';break;
			case 'Y': wynik+='V';break;
			case 'Z': wynik+='W';break;
			case 'A': wynik+='X';break;
			case 'B': wynik+='Y';break;
			case 'C': wynik+='Z';break;
		}
	}
	return wynik;
}

function SzyfrCezara_encode(s)
{
	var wynik = '';
	for (var i=0;i<s.length;i++)
	{
		switch(s.charAt(i))
		{
			case ' ': wynik+=' ';break;
			case 'a': wynik+='d';break;
			case 'b': wynik+='e';break;
			case 'c': wynik+='f';break;
			case 'd': wynik+='g';break;
			case 'e': wynik+='h';break;
			case 'f': wynik+='i';break;
			case 'g': wynik+='j';break;
			case 'h': wynik+='k';break;
			case 'i': wynik+='l';break;
			case 'j': wynik+='m';break;
			case 'k': wynik+='n';break;
			case 'l': wynik+='o';break;
			case 'm': wynik+='p';break;
			case 'n': wynik+='q';break;
			case 'o': wynik+='r';break;
			case 'p': wynik+='s';break;
			case 'q': wynik+='t';break;
			case 'r': wynik+='u';break;
			case 's': wynik+='v';break;
			case 't': wynik+='w';break;
			case 'u': wynik+='x';break;
			case 'v': wynik+='y';break;
			case 'w': wynik+='z';break;
			case 'x': wynik+='a';break;
			case 'y': wynik+='b';break;
			case 'z': wynik+='c';break;
			case 'A': wynik+='D';break;
			case 'B': wynik+='E';break;
			case 'C': wynik+='F';break;
			case 'D': wynik+='G';break;
			case 'E': wynik+='H';break;
			case 'F': wynik+='I';break;
			case 'G': wynik+='J';break;
			case 'H': wynik+='K';break;
			case 'I': wynik+='L';break;
			case 'J': wynik+='M';break;
			case 'K': wynik+='N';break;
			case 'L': wynik+='O';break;
			case 'M': wynik+='P';break;
			case 'N': wynik+='Q';break;
			case 'O': wynik+='R';break;
			case 'P': wynik+='S';break;
			case 'Q': wynik+='T';break;
			case 'R': wynik+='U';break;
			case 'S': wynik+='V';break;
			case 'T': wynik+='W';break;
			case 'U': wynik+='X';break;
			case 'V': wynik+='Y';break;
			case 'W': wynik+='Z';break;
			case 'X': wynik+='A';break;
			case 'Y': wynik+='B';break;
			case 'Z': wynik+='C';break;
		}
	}
	return wynik;
}

var uchwyt = 0;

function SelectXor()
{
	if (cesar.value) cesar.value = false;
	if (xor.value) xor.value = false;
	if (rot13.value) rot13.value = false;
	if (morse.value) morse.value = false;
	if (polyb.value) polyb.value = false;
	key.opacity = 255;
	key.enabled = true;
}

function SelectOther()
{
	if (cesar.value) cesar.value = false;
	if (xor.value) xor.value = false;
	if (rot13.value) rot13.value = false;
	if (morse.value) morse.value = false;
	if (polyb.value) polyb.value = false;
	key.opacity = 100;
	key.enabled = false;
}

function Szyfruj()
{
	//czy pole z tekstem do zaszyfrowania nie jest puste
	if (TekstSzyfrowany.value == '') 
	{
		alert(s8);
		return;
	}

	//wyczyść pola na tkst
	TekstZaszyfrowany.value = '';

	if (cesar.value)
		TekstZaszyfrowany.value = SzyfrCezara_encode(TekstSzyfrowany.value);
	else
		if (rot13.value)
			TekstZaszyfrowany.value = SzyfrRot13_encode(TekstSzyfrowany.value);
		else
			if (xor.value)
			{
				if (!IsNumber(key.value)) alert(s10);
				TekstZaszyfrowany.value = SzyfrXor_encode(TekstSzyfrowany.value,key.value);
			}
			else
				if (morse.value)
					TekstZaszyfrowany.value = SzyfrMorse_encode(TekstSzyfrowany.value);
				else
					if (polyb.value)
						TekstZaszyfrowany.value = SzyfrPolyb_encode(TekstSzyfrowany.value);
}

function Deszyfruj()
{
	if (TekstZaszyfrowany.value == '')
	{
		alert(s9);
		return;
	}

	TekstSzyfrowany.value = '';
	if (cesar.value)
		TekstSzyfrowany.value = SzyfrCezara_decode(TekstZaszyfrowany.value);
	else
		if (rot13.value)
			TekstSzyfrowany.value = SzyfrRot13_decode(TekstZaszyfrowany.value);
		else
			if (xor.value)
			{
				if (!IsNumber(key.value)) alert(s10);
				TekstSzyfrowany.value = SzyfrXor_decode(TekstZaszyfrowany.value, key.value);
			}
			else
				if (morse.value)
					TekstSzyfrowany.value = SzyfrMorse_decode(TekstZaszyfrowany.value);
				else
					if (polyb.value)
						TekstSzyfrowany.value = SzyfrPolyb_decode(TekstZaszyfrowany.value);
}

function TekstSzyfrowany_checkEnter()
{
	if (event.keycode == 13) Szyfruj();
}

function TekstZaszyfrowany_checkEnter()
{
	if (event.keycode == 13) Deszyfruj();
}

var timer_handle = 0;

function TekstZaszyfrowany_onfocusin()
{
	//rozpocznij mruganie buttona
	clearInterval(timer_handle);
	timer_handle = setInterval('right_aureola.visible = !right_aureola.visible',500);
}

function TekstZaszyfrowany_onfocusout()
{
	//wyczyszczenie interwala
	clearInterval(timer_handle);
	right_aureola.visible = false;
}

function TekstSzyfrowany_onfocusin()
{
	//rozpocznij mruganie buttona
	clearInterval(timer_handle);
	timer_handle = setInterval('left_aureola.visible = !left_aureola.visible',500);
}

function TekstSzyfrowany_onfocusout()
{
	//wyczyszczenie interwala
	clearInterval(timer_handle);
	left_aureola.visible = false;
}

function view_onOpen()
{
	label_s1.innerText = s1;
	label_s2.innerText = s2;
	label_s3.innerText = s3;
	label_s4.innerText = s4;
	label_s5.innerText = s5;
	label_s6.innerText = s6;
}