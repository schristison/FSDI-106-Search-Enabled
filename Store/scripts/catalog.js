var items = [];


function fetchCatalog() {

    items = [
        {
            "code": "1234A",
            "description": "Aircraft Multi-ranger - this is the best ever!",
            "price": 99000.65,
            "image": "data:image/jpeg;base64,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",
            "category": "Aircraft",
            "stock": 2,
            "deliveryDays": 180
        },
        {
            "code": "35ADB",
            "description": "Aviation Jacket",
            "price": 160.55,
            "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFxUVFRUWFxUQFRUYFhUVFhYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0eHR8tLS0tLS4rLSsrKystLSstLS0tKystLi0tLS0rKy0tLS0rLS0rLSstLS0rLS0rKy0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYHAP/EAEYQAAIBAgMFBgIIAgcGBwAAAAECAAMRBBIhBQYxQVETImFxgZEyoQdCUnKxwdHwFGIVIzOCsuHxQ4OSosLDFiQ0U2Nzs//EABsBAQEBAQEBAQEAAAAAAAAAAAABAgMEBQYH/8QAOREAAgIBAgQCCAQEBgMAAAAAAAECEQMSIQQxQVFhcQUTIpGhscHRFDKB8EJS4fFTYnKSotIVI8L/2gAMAwEAAhEDEQA/AOnKZ6qPOOAyAICAOKsjYodCSWaoLJJY0i9lGoaT3ZRqGkXso1DSKKcmoukLJFjSeFKTUNIQpxZdJ7JFihckliggsWWhQsgDWRmkFIUzH0lORs+qBpmamvoaik/hIyrmcRqJ0+U5tnZIaKD9+MlloBh+ctiiJVp/KLJRqfopxDJtKiBwcVUbxU02f/EizSZia2O9ss6JnJoArNWQTLBASIAhlIIYAJEoAIggBEpAbSgiJNswhwSFDEAcWRlHVMyzQ4DMlDuJCigiAFaQotoANpSCgwAryFPXgCZoAuaKAoMAMTJoWAYf6Ttt4dKDYVntWcK6LlJvZxcX4A2udekzJrkbjF8+hx2rUtOR3oZfFiQDLVs0AFqgFhKiM1/0U9mdo0yx1VamXQm9RlygacO6zG/hNRe5iadHeJ1OIJlADMJTLG2cTVEsbNQS0ZsE1BFCxO0loWCaoiiWNmoJaJYPaCWhZGE2YDWQoYkKGsAcUTLKhwLM2aoJZLLQ6Fks1QpcDiZC0CmLQ8GHvIB294AlpSCESgEiUgljBKCVZLKkOASGgpCi3kBxv6XqQGPpMb9+gMv3gzA/K3vOGTaR6sO8GjC1WvIVER6OsChCQIAFPVosJbm5+h5lfaGi2KpVPqAFv7MZYfmRMr9g7kTPQeUbcyoyxliZsyNNKZAM0QEykBMAAwBCIAkAQJFigwsWKCCyWB1EkbNJDtwJzbNpETEYo624SWaor1x1UmyLp1M4zzxgdIYZSLKhiWPEiMeXWrNSxadgto10p0md+ABJnU4s4LtY4su+IoM6AsSoBI0ktlpHTPov3qfEUuyxDXrJx5EryMt2Z5HQYKegHrQD1osCwBYB6CnoBm98906ePWmSxSpQbPTYC9+GZGHQ2Hl8piUbNwnpZxPaeDIYkTzpnra6kHsT0lFDFXCHjFiiXgMMADeYbNRidB+hjd0LUxGLbUhslMfZzC7nzsVHv1noxq9zy5X0OrzqcATABKy2QArLZKAKS2SgSktkoA05dRKANOXUKAKS2ShMkWKI+0atkuDPBxmVwx2uZ6+HxqU9wqONXKCTN4M6nFMmXC4yHUxqdRO+pHLSGmMU8JnUi6WI7zlPKonSONsYIHOeLJxLZ6oYUhmrUFrDSfPyZz1RxlVTR0DNnJubgX4eE+tws7xJnkzw9uiq3pqYpqJAIK21t06T12eKtzIUtqPYKVGWWXIq5iYTbAo4mm9JSXJtlHMdJiPMst0dYTeGqFBOGc6cit/mZsxbJGC3iDnKaVRT/MunuJGyovFa8oFvAPQD0AWAegCXgHGtu4JBWrd8FTUcrlF+4WJGvlPnyyJSdH1YYm4K9ikIpA2sx5dNfaZ9Y2bWJIZqsg+rp+/GTXIuiIKU6THiy+ViPnLrZPVrozrf0dVaIw/ZpUDPmZmHA8lBt5AT14Zxkq6nz8+OUZW+RrJ3POJAEgUJAoQiUgJEATLABKxZASstgTLFg5/gsVVIs5M+Xxkk0fQ4ZbliXOSwFzPHgyaJ+DPTlhqiM7Np1HazaAT7Da02fNV6qNCXVBaeSebsemOMAYsGeDLxG/M9MMQxVxU8U89ndYyq2ptPskL2JtyEYIetlTdFm9Csp9hbwGsHDKV1uAek+9gUYR0J2eLJcqnRo9n4pailG8p7Is8WSNOzH7c3VqqxahYgm+U8j4S7nNBbobn1Fq/xGJsMvwr0PUwiN2dApY9W0BGky2bSDGIUHlFstD39IWHESpsjRWtt5mYqpFhznRJmG0OJtlh9YGKJY6u2al7AAxQslUdpPzAihZJXHHiRaZbo0lZi98t7tDTpsAADf+Y9PKeHLlc9lyPo4MCh7UuZzrH7bVScz/Oc442zvLKlzZWvtemW/tBc/wAw9h6H5Tfq32Meuj3D/j6djqDe3SwPkJNLLrj3PfxKXNmBOt/BQI0sal3J+D2kUPxWPEEH6trm/kZnSa1I6ZunvqHC0qxueAfmT/N+s9GLPW0jyZuHv2oe42Qxa9Z7DwjdbaNNeLCQDQ2xRP1x7y0SxK20lykqb+UllKltuVOITT5y6ok0yJybaWwLaecloUwf6dpE2DCLRaCG2KfAkRaJR5tr0x9YSgw+H3sw9hcW9J+dyZJt8j7MYRRYYfenC9RMesrmjWnxHhvFhgbhhcz1R421TRxfD72iV/SdBx8Y955XnizqsbQgr0ftj3nlkoy3OytDbVaR+uPeY0I1qY5WFEL3iDN+rrkZ1GX2xXpDWmQCOk6YvWxepEk4tUyqTbLL3hpbjPs4+KjLnszxzxe4vtgbymuct7ec7zz6TzrApcmaxVQixqfMTjLiU+ppcO0JQwlBTo3zmFxUVzZr1D7Hqhw4OrD3l/FR7k9QzzthyLAjXxljxNuoh4e5UVMBlDZOd7T6UW63PDJK9iso7OcNrLZlolMxpsLXlJReYXEeBkKN7y7Qc0MlEAs3E3AAA6mcM0ZSWmJ6eHlGL1SOR7Y2FWqsTVrWH2Uv/iMkMKibyZ3MqTu1RHM363najjYi7tqeFz5JeShYR3Sc/DTqHypN+UbA8Nya/wBVKw8qVQfhJsW6F/8ACuLTh2mnJqbCZcIs0skl1PYWhjKR1plgDe63J01+E6+15zlhvkdocRXM6buZt44hCjgiog4MCGK35g66TONtPQxmjFrXH9TQsmbis62cSHicItiQkqZGBQxZUWyH2gzY6MfYfCYstkeri0PEGBqQ0KlMG4vG4tAmspPE6wLRLGEHWTc1SOY1cA4PjPnvDR7FOxFwxtqYWFDWA6W5zLwIqyApUe4FzqZyfDdaNLKWeJw1RabVCWNtbCejh8EJQujlmyyjKijqbRqCzBiB5zo8MeiMesfcep7XeqCMzG3iZ00JLkY1X1IjYlkOrH3mHBvobUkifhsWzUzwt1nP8Mrs367ahvYp/rMiE3PQz0aW+ZxbSNZT2ViL95iPU8Jh8NCXNF9dJcmX+C2I7ICHN/OZXCR7GvxLLHA7vBTd2Lec6R4eKMSztnt4AtCnnVeHQTvGEYs5Sk2iowu8GddQVPjO1pnKh6ltcsbAXPhAontiVUXYrfoozfPhBCtxm0TyufMWA8lGnvcylop8TtJzxJgpX1cXfz4+shTpRxAqjNTLU7BQQoS3wkki6niHX/hE2sOybfM5vJvQdbFMQlMFwQpu6kkt3MhzZUNjdg17cQPKc8sdC1Lc78PD1zabqvL6tCYfEMhB7zGzDvvUt3stzbsgL3UkdMzAWGg8/rX2+f2PcuBj/O/dH/uZ7eLbHZVVXs3Y1FJutd1F3ZlKgBdTwtfUXFrWE+rwXBx4jG5uVU65HyOOm+Gy6ErtXvt9y52XVrhny01sMisWqOwDHUAacLvx48bgaX5zw4oq9T93T9/3MxnNvkiLj9pVcOrhqOfIAGBq3IQXyuuZDfQ6n+VeM3i4XHkaqdXy2/qSeacL25eP9CpTeVHyPSp5CvdcHLqSLhgVAtezchwnPiOGeFpN3Z0w5VkVrYusJvAjcdPOeZwO2otaWIRhcazFUWxe70kAJC9BJRbGmp0/siUDTUaX2RAoqNoY3D0za4BnSMTDZCO26X2x7zelHO2KyU2NyBODimehSaKHeFKVMKerAe5mHBJm9bot8Nsuiyg2E3pRjUxcbsam2XLYWmZxuLRYypoqts7TWgQhW6nQnpPHwNrVBnfildSQw+7KYkBwbLxtyM99HlstcHsGlTpFVUXPPSKBmju2qVkaocwJAtxEjKjW4rdGnUAC91eYGl5aJZb7H3bw+HtkQA9bRQHNv1itMlBdraCUyym3G2+1TNTqaMp4QEbPtxBSPjWRlIOsAwe3aAqOqIcgBuzW4IOXmdAPOVEZKw+LFHuI1l0OhI4ixF+J4L7zZAhine9mLcyb6KvVmOgHiYckqXf3vyQrqQa9dBxrUx5Co591XL851XD8TL8uJ/q0vm7+ByefCuc/db+SItUUjxr2J11pVALHgdLm3pL+E4v/AA/+SH4nD/N8GNvs4kFkdKgAucjXIUcSUYBrDraefJqxuskHHzW3vVr4nWEoz/JJP5+7mbXY/wDY02Gbv06RbiRmFJENv6ogfB9o8/IWXFyilHStvPxf1PZh4DHkjrcnb6ez5d7+BKaqpYXKkgEasml7E8XHQcuU4ZOIc1pdfv8AU92DgVheqOrt1+kfqK1ZftKP76D8KwnC1+/7npUJPo/c/wDozNb5Bj2LpdiC4079iMhXhUfx5ifoPQs46Zxb7fXxZ+c9O45LJCSXR9PH/TH5fqW2yN42AHcdMyk1AaVXKrKP9nYG5PT9i5uFXdPtut/PyPFjzvtXfZ/Ah7e2o1QVbU3dmQKmWlVyZG5m4BVxrp4D03gwqLj7SST33V/2ZMuRtP2W+2zMjgM6MwZWFwp7ykahso4j+czHpBptNM3wmyaZbbIwuIr01qq1NVckKGzXFiRqw4G6kWtoZ4IxT6ntpVux7+l62FdUrLkzC6kG4P8An4EAyThXMlF7R3pp90PcEnLfQgmcnEqZcpXzAMNQRcHqDwmSiF4oDVSppJRTm29+AIDsCxYnSbTpGGtzKjY1fr+MuoUdFUD7U5myPjMIlQDM17QAlq5RbNwgAvtAAHvQCn3vxlM4cWILE+s+ZwkZLPJvke7O16pE7dDbKrQCsdZ9Q8BdrtKl9qABSr0b3Y3twgFxT29SAteLAY29S6xYKja28NMPz4QRmT3V2moxruQQrWA0MpEdSTGUzIaCzIYIY3e3FgsaVPgPiI5kdT0Bm4rYjMrgqzmtZ82QDyJsQb315A+8O625hUazaGzWNxnVKdg9FTazoVJLHvXDgZQSb3LW0Fp1h6QxcJjhOMNTlep3ummlXLlfJbKvE88+HnmnJOVJcu25Do49RhGpChTcliwr9zusoU5ctQDMQpe54gMOPP2R9J8PPIpubj4NP/5s4vhcsYaVFPx2+pL2hUbErTDU0oLSRtVy3dUAHeyiy97MBxALWA6+afpfDhv1Nzk+9pL37v4eZ0XBzyVr9lL3/b98gBhaZucOGZWw9VM1iQ1RS5ZgehCZSdBdha+s8v4nPkwTWd+1GUZNdk9qrpT3rnW52jjxwyxePk01+v72NZuEqvgqTFFLDtFzFQTZajAa+VpHFXyPSsuRR0qTS7Wyy21tNMMobJcsbBRYcOJJtoOHvOeSaguR6+B4OfFzcdVJc3zB2HttcSrWXIy2upN9DwIPMaGXHkUy8fwEuEkrepPkyj+kknsaLa2FYBrEi6FWJGn3Z9b0Y1rkn26+fifD4yEnGOlN79L5foZveVsI9Gn2CntLAk2P1uP4HTS2nU39vC5ZQyP1s0l5o55+EyZIL1eKTfhF/YjX0HkJ+SzJLLJLdW/mf1LhpSlhg5Wm0ufPkNvVOWoP/iqn1RDUHzQTWB1NHh9MY1LhZPqq+aND9HO2aYwxwyvlxCV6rZbBi1Go5dXCXBdO9Y2IsRxGhn0VXU/EsT6TezfBUbOQ6YoHKwyku1KpoFsL2zjW3DjfiTIjnuJxWYID438O7Zv+XN7zLNmm3L292RFGq3dIVc3IPwBJ8RlB9JmRToBqTBRl3EAiV6FNuIvIBk4Wn0iylbiMGii5lINpglYXAgDo2KDygCNu9TOhEAjVNzKTcZKQsk4bdSmmgEobJtLd2n0gg+Ngp0gDqbCp9IoWOrsSmPqxQs8+w6R4qJaAibv0RqEEUCdSwCjlFCyPteqKNJnHHgv320H6+kqRGzmGNxjZiB6tyE6GT2JqZVAOrEXGuumpv0gGwqYpCtC+Us9CkympYqrBQeB5dy9rg+hN5wihKEdf8Ll1r+J8+5jNqUnp6pfIf/hqDZ6jh2GVcx7huWZUsipeyjML3B0I4znxuLHGeOGOEU5N720lXfdbsYJTak5N7eQ3tKknYFqOYAEjMfiFipYXYDQ9ryAN/A3muBlDDnlDJCNxV2t/n9yZ4yyQTi3u632HcHi7VaVOjTZaXwuGVFLDKRdr2N7+9vOb4zMp4531T+RcGFxcfAnfRlVvhGUfVrOPQhX/AOqcrvc7Mvtr7LTEJle4sbqw4g8PUeEzOCmqZ6uD4zJws9UN75p9SPsbYq4YNlLMz2uxFtBewAHDiZMeNQOnHekJ8W1qVJckNb2YR6mHIVSzBlICgk8bHQeczmjcTr6HzRxcTcnSaa32/fIxdPY+IJ0oVfVGA9zpPKscux+plx/DRVvLH3pjlXYWI/8Ab5A/2lP4ToD8XAma9TPscv8AyvB/4nwf2GBu9ibnNRYLldWN1NgyMpvY+M3jhJSTaPLx3HcNl4ecY5E214mD0YK2twAVYEhlbkVYag+InuPyNBUad3NV2Z3+1UZna33mJMCgax042uePQH/SAI6qoFmzAn5W/wA4otnUd1dqNXoAv8SmxP2l+q34+0zkjpZIys9vBtkYdM1ideQvMJFZRVN/8OBrcHplP6TVImousLtAVEVxwYXmKNlr/DqeOspkdVANAIA4BADCQAwsANVlAWWAFaCCgQD2aUBKYA4BACvIDI7+4ohUQcszH71rD5MZtIz1OX4iqQdOHE+Y6ylK+rjWNW1+Fl9eLfp6nrMlOtfRrjaFemtCsitVogmnn1vSNr2U6XBsOHDLPPXq5tdJbrz6r6+86fmj5Gv2nhAgDIALMSWu91vqLFTdV5cDYEaWEcS28aWnUr3Xh4eJmEVqu6ZGSpSd1VmDLckhnZgBkcG7OBoSU7o8TPJw+2fVCGlaad+fmdJR9im73sPfPaK4fB1CtlaoMiWsLu4OunQXb0nryrVUO/y6/b9TMdt+xhdw96sPg6NVKpfM1YuqohbuZFXjoL92ehmCbT36wist/wCJOV3OqpqjqFya1NOAN+N72tcxuQcTfnCtSFEfxK5QtnyUfqnTu9oRpyvfgCbxTAlXfrDLULhcW16va2P8PlB7M08gBf4SpGnVb8zLTAzT3zwiAEUcS1kqpaoaFmSq2Yhu8b24Dw43imCDiN/6TL2bYRypRELGvdytNsykkrxuSZKYHcP9I2Hps+XCVb1WzMFdG7xvrYkW4xTKc8p3QAHkAPYaSiwnqm0AaqV+A8RKQjs9r20/Tkf34wDUfRxtJhW7E/CyNlHQjvW+Rt5yT3iRbM6BisOraMLzkbKuvsDDtqUHtKCXSw6qAo4CAWqyAdSUD6wQIQAxKBRBAwIAUA9AFCygICALeALIDnm/tX/zBS/BVBHQ6sfWxX2m0ZMbj7KhPPoOZPwj1NpWUy20Hy1Ljnr6mZKabZeMZTTqI+SoArqw5Nax8xxBHOSUFNUzSbXI6Jgtv09pClSqOKNdHGZSxCVU0J7I/aOUaHx0YTxZo1Sycu/T9ez+HijrF/yl9tLYGDoUmqX7LLr2jG9mJ4gfWa7Gw6nhrGXFiUfPlzd/pYjKTZzrfDeM4hxYFaaDLSp/ZT7TfzGw8hYdb+nFBr2pc38F2+5zk72XIzSPOxkdwOCqV3K01BIGY3ZVAW4F7sRzIHrMTmo1fXsr+RUrLanuviOlMf76n1tyPUH2hTb5Ql/tf2Jt/MveiTS3UxB4Gmf95f8AwgzD4hJ1pfuPSuDzNXQmO3VxFOm9VslkXMbZ+FwNLoBz6yfiVaWlq3XIzLhpxVuveZVmJYIgzOxAAHEk6Ceg85q9lbtBBmqZWa9mZiezVz9VVUg1D43C9Lzusai0pJuT6L6vp8Tg8jkri0l3ZZLgxYZaZuw4LRoBSQLsB3Lm3jf1nSWiDaloSXO2735Xv+/A5KepKnJ34bbc62ImL2VQYaoovqD2YpX8Q9IAe4bymZQ53Bbc9Luv0f8AQ3HIttM+fLUuf7/Uxu2dnNRdWFyhZdSLMpOoDgaa2NmGhseBFpwnHTydo7xlfNUyIvee3IgeupH5TBom7Oxf8NWSryQgn7l+9b0vNV0IdjLAi41BFwfAzgdBhxAGCZAWCtNEHkMAeVoIOAwAwZQGDAFBgBAwAxBAxAFgCWlB41AneJAAtxNhe+nzkYOP7y4gti61zwqODfwNgJtNPkSilr1AXuBpT+dQjX2Bt5sZSmb2yRmB8/nMglbNxBtTN+BK+xv/ANQgpMVi5IuAOJJ4ASg0+Aw9fEKpqVK1REUmmrEu5W2hpp9W97Zm1seIE8WrHilWOKt7X0Xm+i718zrTauT2+I/j92SwzLTNFglM94HIzMozJcjRle48RY9Z2y5I4WqlrT6rmmu67Pp25PoYj7a5UzM1lKsUcZWU2IPWdoyUla5My01szQbk0i2IdALk0Sbfdr0W/AGWElHNjb7v4xkSUXKEkvD5o3y4Nx9UjzIHLx8vwn1fXY/5kedYMr5QfuJtLE5VUM4FgBrVFrgcNcX+Q8p8rJJObafV/vmfosOF+ritG9L+F/TD9X5kTeCuj4XEAMp/qah0emx0QtwFRieE82bkv9UfmvEznxyWN2mv0a+cUck3TW+KpOedSwv0II/OezH+ZHxMv5GdDTZyuFqrUIsCCjaKGGhsyjpc2PXibTvn9Lfhs0sWaHk11XTZv5Pn0PDh4L12BSxS580+/XkUG0qjoxVyRlY6G4AbjYN42HnOmbNjywUoLeVNvuunTo/c/E6cPi9XKn/Daq+T69evPxXgNYPEVarFbhlQWFtePjew/UzvDPgxx9Y3pv8ANfV15bv6HmzYMkpaIx1V+WuivzpdiDt2iUw9UO2YkIeB0Hapa5PHQcp5JcTiz4pPFH2U1vyt9dvueqGKePNH1j3p7c6RjKtWxUjqQfI6+4IBnlPYSRiLg348PyP6+sWDsW7JBweHsb/1KDXwUD8pzfM0WDLIBrLAJKGQo6sAcUykHQYAYYQAgYAQlolhiKFhRQsIRQsWQCygzu/Vcrhso+u4B+6AWPzAmo8yM5jiWCBiRc8bnmzHQX6lj85vkEZ+piHC5Vuep6niT73kBWYu5FjIA9j8fIt/hEBGm2Ns7t7rbugju3t2jXANyNQoLL0HU6TlkzRxtauXWv1f0fj2TNaW065nV8EiUnp0qpCk5RlUFe+wBFzqRx8LcyeAmLg9alJ2l2vkuzarfly28+ZuXsqN7t9fh7uZo6mx1t3SynxJdT55tR6ESPhIVUG1+rfzf2fiZ1290mcz3z3dPaMSMrBQEy/D3QAFJPHiLWtoV5mwz62OKKVVK/a7b27Xg/v2bEYybe9rp9jP7o7Up0MRnrHKppVEJAzd45SNMrfZ+yZviFJqLirpp/PudeHmoTt/X6NP4o2i744MfXb0S34YZZnVk/w374n0JcXif8Xwl9ZsRt+sKODVvQuPwZY15v5P+Ry/E4e3/GP1TIG1d+qJpVEtWPaU6iAMahF2QqL5sQwtcj6p/OSazTVOKW66t8nZnJxOJxaUd/KC+UE/iYfY9bs6lE8hVp3+7mAPyJnsTpnzZK00bqhinpkqA1r6jow0uB+7z2elOAjxUNcaUl8V2f0Pk+juLlw8tErcX8H++ZbbMdK16pUkEGmynUMy2CtlIPeAtyPKfnYcS+HiseSKdO0+qT5ryv4n3pYFObnFtWqa6Px86+BDd6FEulMBQCXyaknMToPLQW5DjxlzPNx+aOlX0Xh3b/fauQj6vhcbbddWYvenE3o1CeLso+ef8En6DNhjw/DwxR6fHxPj8NllmzyyyMKHvY+Py/d54T6JPpre/gfylB1/cSpmwNLwzr7O35ETmzRdsIA0YA8khR1TBAw0ANTADBgDgEpAxACvABBaQDoMoCBkAYMFMb9ImJ0p0xx7zHwGgH4H2m4GWcox1VywBvzPsCPzmgNNXtpwgFTjsSWJkAWyals/X9f9ICOn7t4RKWHFW4DpSz5zfKGbOSzAakBTynhjmcs3q3yc4r3NV72dZQqOpc0mSKWLrVjmSvTzKSA74lVzaWDBUzA6X0NjP03sR2lF/wC0+fpnJalJe8m4faONue0es7D4SiucOttbBj8ZsOJ014c5yjLFKTio0l1fN/vwPRlwZMWOE3NScui3pePbyLnaW1KWNBISohpDXOlg1w4CqSO8pIN7W4CfG4xLFlStNuMl5fl36b7s7RhJ41Jqlar9PDf4nJNvUVpYiqq/CHJUdFYBgPQED0l4ebnijJ86LNVJpFYXJnYwTcMmlz84AzVGZrQD1Yjh4WgG4w7/AMTTp1gxDgAm1hespXtQfVQwH8wn0PxS9VGMlcX7MvDt/c+cuGrJNxe/NfUexO8rUVqJoM/eTNwUsSXN79Wa3nPjZfRTg4PJ0518Fy8D6OHjVlT0fH4/Mq3LVmZlJu9lVyNT1a3S34T7cVhwQeSEaitl+33fc+VeTLOOOcrlzfbwW2231M5vfX0p0b3IGZuerAAa/dW/9+ebismuS8EerhcehN92ZscRPKeolCrYi3Ma/v8AfGAdL+jDG3o1aZ+pUBHk6/qpmJOjSVmwapM2aoa7SLJQ8plIOBpQHmkA5TaAPrACzQAgYAV4AamAFaAeAgBAwDm299cvinuQQCqLbkirqD45zUnSBlmS2jlzM32Vt/eaxt6AKf700QoKtQGZKVmJbXSAObOHe8wfaUiOsbBrqcPTI1YqR2fEuuWzADme6LDnr10+JmtZpRl+V1v27fv7HsW8E1zREfDJTBp/0fmBto+VHUHUjtGbMG53FwdNBwn6HD6VjX/ty+0uqTafilXLwfx5nn/8dlkrhi2fivuV2J2EV71Iuq6G1QXZfDPRzKdR8Ryjy1t7oemeFkt5fB/Jpe7c80vRfER3UH+/I12wSDRNM1mcrftarFjdwLimhbUjha/K5tqJ+Z9J8RJy9ZSWtbJdI+NbW+tddr2PZwuP+F37PNvq/wChzXeKsDiKlidGtrzKgLfy0nr4dNYop9jM37TGcJT5zuYJxNhKQi0zYkmQDF7mAWWwdr9gxV79m9sxW+ZGGgqKOduBHMdSBOmLIoupK0+aOeXG5K4upLkzUFRlAtmGUZWWxV1+q1zxvob311M+go5r1Y2pRffmvD7dj50p4HtlTjJduXn/AFIeOxa0U7V7qLEBA2tVrghR0AtqR18BOee475Wm+i7HTC4y9nCqXVnPsZiHq1Gdjck3NuFz06ACwHlPnttu2fQSSVIQJzkKINW9/wAoB0T6K11xPlR/7k5zNwN26zBoaIgBipbjOhgcRrwB9ZAOoYA+rSgLNIAgYAUAUGAGpgBBoAt4ByPepx29XKAAHbh4sxJ9Tc+s6rkZMdVrEi5+tr6tr+kAhmjcXJsJAV9ZhfThKQkYRTy/f7/KAXGytrVaN+yqul9CAeP6HxGonKeKGStaujpGco8mbfYuKoVx/Wovaqjd9iTmLcanhY253HEeHleN4/YW8btLlf8Al/XmvHZ8zssr3fdU/v8AeufPoS9rjDrZy9RQG5VGzMLBcrjN3jx06Wm82l5G4QTtbX18f8qXvfluTDmnGFXXiunl3fwXnRl9sb516i9kuUkaCqyq1UAHSzAALwHI+czj4GEXqfu6DJncigoYYk5muTxJPMnibz3JHnJ6JKDzkwCNV42kAw5t5wBmo2sAsNmbdqUFyjKyakI4LBWPErYgrrxF7HpfWdMWeeP8rOOXBjy/mRU7X2o9V8zsWa1hyCqOAUDQDwExKTk7Z0jFRVJFfTMhR6mZCjtM2t+/CAdE+iw/+pPjS/7kxLc0jdOZmi2MkxpLqFUAymR5JQPLAHBAHUMEDUmAKTADUyFCBlIEDADvAPXkBxbeivdqxB+J3t/eYqP8U6kM9VqKOOvSQpAxLM3ebQchBCEBzghYbOGgt+7f6zSA/WpHMW4c/wBZKKTqAemA5NgLEHx8JGrVMqdDWJx5qMSTa/QWsOigaKPASQioqkG7Cwxor4zZC1w7oRYfOUh6oi8ARfzgo1VphVuSPeAVdRieBmQClK/+sAaqUwOYgDfZn0kBAxVMBVNzmJN+mWy5beN8/wApSDCwB+nwkKOH8oB0f6Lm7tfzpfg8wzSNq7yFGiYIPBZSDiwBwNBRxDAHRADUyAMQQIQAyJQeAgBAwBjGn+rf7jf4TAOJ7x1b6/ae/tc/iJshSoq/E59IKR8Vdjdu6o4Dwgg1h8M1V1poNXZUUdWYgC/vBC2xeBFGvVpAaU6lRR1yq1lb1AB9ZUUko4As2o8tR6ygi1XzH4R5kL+khRyirHRQPy/CCFjQwrfWNvX9ZaAtVQOp8gh/KAMC/Q3+6nDx0gEfENrqPLurf8IAAJHEH2H6SA9Vtxt8l/SCjBAPL5L+kEAdbDgB/dUfgIAxVw2enUbnTUP6doiH/wDQe0EKoQCWgkKGxgG7+i8HNW+5S/FrfnMs0jdODMgYJMAmLKQINaCjiNAHEaCDmaAGrwBwPAF7SAKKkgDEoFBkAR10MoOF7yUSjZD/ALOo9M+YuAfl85oFAbwQE07nWUGq+jdaX9IUu0NrBuzHWsVNr+Sh/W0jAG/LBdpYi3DNTOnImihPz1lQK3Q68f36SgcDjh+/nKB8YlVFgIsUeFXMdbwBatZVHdOvWAefE5Vspux4sYBFQC9y1zIB98Qg5XMoIeYE3PtIAWqDkDKAWN7X6yAg4pjY2Nswsbc1uDY+FwD6SAgoJSEkNIU8DAOg/RcpyVz40xfwHaaTLKjbP5yFGcvjAHEqQQNWlA6GkAaGAGKlooCmpKDy1LwBxWgEhDIAzAFBgBK0A5j9JOz8tZmHCsoYf/algf8ApPqZUDnhMpBLygPBYt6NalVp/GjqyjqQeB8Dw9YIXe9dYVMdiWBuO1Iv9wBSPIZSPSFyKBhVVhZviA9xKgG2BBPGWgPUsEo1PDyv7xQCrU04KFHuIAymH5kn/jMAYruL6Off/KAN5m+0ff8AygAMCfrXkB4gW/zMoAel0Ue0gI7m0gI1c6H2hAi05SDwMhT17QDpP0Zf2FXr2g9sg/O8yyo1jmQDZaANJVgo6lSCDq1ZQOCr1gBZrwAleCBqQYA9TEAfWQorNIAVqeJii2Oq8EKPfbZwrYVyPipXqKfId4eq39hKDimIHePjr78fn+M0BgykAZrEGCE7DVbks2pzEkniSeJPjreLKT+0DajQjhKA1xR4E+UAVto20ixRFqYn0gDBqnrAEGII4gRYEFbzgHjVgDYqkQARiydBFgRmubTIFqUM1Oob2yKG8yaiIB/zE+kB8iBTmiDshRTAOnfR6mXCZub1HJ9O4P8ADMspoWqSAZarBT//2Q==",
            "category": "Accessories",
            "stock": 12,
            "deliveryDays": 2
        },
        {
            "code": "7771D",
            "description": "Aircraft Goggles",
            "price": 88.65,
            "image": "data:image/jpeg;base64,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",
            "category": "Accessories",
            "stock": 10,
            "deliveryDays": 2
        },
        {
            "code": "55532A",
            "description": "The Supernova - Greener and faster than ever!",
            "price": 1000000.75,
            "image": "data:image/jpeg;base64,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",
            "category": "Aircraft",
            "stock": 5,
            "deliveryDays": 180
        }

    ];
}

function displayCatalog() {
    //travel the array
    for (var i = 0; i < items.length; i++) {
        //get the item
        var item = items[i];
        //draw the item on the DOM (html)
        drawItem(item);
    }

}

function drawItem(item) {
    //create the syntax

    var sntx =
        `<div class='item'> 
            <img src='${item.image}'>
            <label class='code'>${item.code}</label> 
            <label class='cat'>${item.category}</label>

            <label class='desc'>${item.description}</label>

            <label class='price'>${item.price}</label>
            <button class='btn btn-sm btn-info'> + </button>

        </div>`;


    //get the element from the screen
    var container = $("#catalog");

    //append the syntax to the element
    container.append(sntx);

}

function search() {
   
    var text = $("#txtSearch").val().toLowerCase(); //get the text    
    //console.log(text);

    //clear previous results
    $("#catalog").html("");

    //travel the array and show only items that contains the text
    for(var i=0; i<items.length; i++){
        var item = items[i];

        //if the description contains the text, 
        //OR the category contains the text
        //OR the code is equal to the text
        //or the price is equal to the text
        //then show the item on the screen

        if(item.description.toLowerCase().includes(text)
            || item.category.toLowerCase().includes(text)
            || item.code == text
            || item.price == text
        
        ){
            drawItem(item);
        }
    }
}

function init() {
    console.log("This is the catalog page");

    //get data
    fetchCatalog();
    displayCatalog();

    //hook events
    $("#btnSearch").click(search); 
    $("#txtSearch").keypress(function (e){

        /* if(e.key == "Enter"){
            search();
        } */
       
        if(e.keyCode == 13){
            search();
        }

    });

}



window.onload = init;