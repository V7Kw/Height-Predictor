from colorama import Fore

ascii_art = r"""
  ___ ___         .__       .__     __    __________                    .___.__        __                
 /   |   \   ____ |__| ____ |  |___/  |_  \______   \_______   ____   __| _/|__| _____/  |_  ___________ 
/    ~    \_/ __ \|  |/ ___\|  |  \   __\  |     ___/\_  __ \_/ __ \ / __ | |  |/ ___\   __\/  _ \_  __ \
\    Y    /\  ___/|  / /_/  >   Y  \  |    |    |     |  | \/\  ___// /_/ | |  \  \___|  | (  <_> )  | \/
 \___|_  /  \___  >__\___  /|___|  /__|    |____|     |__|    \___  >____ | |__|\___  >__|  \____/|__|   
       \/       \/  /_____/      \/                               \/     \/         \/                    
"""

print(ascii_art)

      
ageHeightMale = {
    '8': 72,
    '9': 75,
    '10': 78,
    '11': 81,
    '12': 84,
    '13': 88,
    '14': 92,
    '15': 95,
    '16': 98,
    '17': 99,
    '18': 100,
}

ageHeightFemale = {
    '8': 77,
    '9': 81,
    '10': 84,
    '11': 88,
    '12': 91,
    '13': 95,
    '14': 98,
    '15': 99,
    '16': 99.5,
    '17': 100,
    '18': 100,
}

def calcHeight(gender, curHeight, age):
    age = str(age)
    heightSet = None
    if gender == "male":
        heightSet = ageHeightMale
    else:
        heightSet = ageHeightFemale
    
    if gender != None:
        if heightSet[age]:
            Step1 = int(curHeight) / heightSet[age]
            result = Step1 * 100
            return result
        

def ToFeet(cm):
    total_inches = cm / 2.54
    feet = int(total_inches // 12)
    inches = total_inches % 12
    return feet, round(inches, 2)

while True:
    print()
    Gender=input(f"What's your gender {Fore.BLUE}({Fore.WHITE}male,female{Fore.BLUE}){Fore.WHITE}: ")
    Age = int(input(f"What's your age {Fore.BLUE}({Fore.WHITE}8 - 18{Fore.BLUE}){Fore.WHITE}: "))
    CurHeight = int(input(f"What's your current height {Fore.BLUE}({Fore.WHITE}in cm{Fore.BLUE}){Fore.WHITE}: "))
    if (Age >= 8 and Age <= 18) and (Gender == "male" or Gender == "female"):
        print(f"Your height will be approximately:")
        print(f"\t{Fore.BLUE}{round(calcHeight(Gender, CurHeight, Age))}{Fore.WHITE}cm")
        print(f"\t{Fore.BLUE}{ToFeet(calcHeight(Gender, CurHeight, Age))} {Fore.WHITE}Feet")
    else:
        print(f"Failed.")