const enhancer = require('./enhancer.js');
// test away!

test('repair()', () => {
    let item = { name: "Eric", durability: 0, enhancement: 0 };

    for(i = 0; i <= 100; i++)
    {
        item.durability = i;
        item = enhancer.repair(item);
        
        expect(item.durability).toBe(100);
    }
})

test('succeed()', () => {
    let item = { name: "Eric", durability: 0, enhancement: 0 };

    for(i = 0; i < 25; i++)
    {
        let current = item.enhancement;
        item = enhancer.succeed(item);

        if(current < 20)
            expect(item.enhancement).toBe(current + 1);
        else
            expect(item.enhancement).toBe(20);
    }
})

test('fail()', () => {
    let item = { name: "Eric", durability: 0, enhancement: 20 };

    for(current_durability = 0; current_durability <= 100; current_durability++)
    {
        for(current_enhancement = 0; current_enhancement <= 20; current_enhancement++)
        {
            item.durability = current_durability;
            item.enhancement = current_enhancement;

            //console.log(item)
            item = enhancer.fail(item);
            //console.log(current_durability, current_enhancement);
            if(current_enhancement < 15)
            {
                expect(item.enhancement).toBe(current_enhancement);
                
                if(current_durability > 5)
                    expect(item.durability).toBe(current_durability - 5);
                else
                    expect(item.durability).toBe(0);
            }
            
            if(current_enhancement >= 15)
            {
                if(current_durability > 10)
                    expect(item.durability).toBe(current_durability - 10);
                else
                    expect(item.durability).toBe(0);
            }

            if(current_enhancement > 16)
                expect(item.enhancement).toBe(current_enhancement - 1);
        }
    }
})

test('succeed()', () => {
    let item = { name: "Eric", durability: 0, enhancement: 0 };
    let current_name = item.name;
    
    for(current_enhancement = 0; current_enhancement <= 20; current_enhancement++)
    {
        item.enhancement = current_enhancement;
        item = enhancer.get(item);

        if(current_enhancement > 0)
            expect(item.name).toBe("[+" + item.enhancement + "] " + current_name);
        else
            expect(item.name).toBe(current_name);
    }
})
