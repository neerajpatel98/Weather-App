#include<iostream>
using namespace std;


int f1(int x,int y){
    if(x==0){
        return y;
    }
    return f1(x-1,x+y);
}
int main(){
  int x;
  x = 5>4>3;
  cout<<x;

}